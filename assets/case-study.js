/* Shared case study behaviour — reading progress, section index, lightbox. */
(function(){
  'use strict';

  /* Reading progress hairline */
  var bar = document.querySelector('.progress');
  var ticking = false;
  function progress(){
    var h = document.documentElement.scrollHeight - innerHeight;
    bar.style.setProperty('--p', h > 0 ? Math.min(1, scrollY / h) : 0);
    ticking = false;
  }
  addEventListener('scroll', function(){ if(!ticking){ ticking = true; requestAnimationFrame(progress); } }, {passive:true});
  progress();

  /* Sticky index — highlight the section in view */
  if('IntersectionObserver' in window){
    var links = {};
    document.querySelectorAll('.toc a').forEach(function(a){ links[a.getAttribute('href').slice(1)] = a; });
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){
          Object.keys(links).forEach(function(k){ links[k].removeAttribute('aria-current'); });
          links[e.target.id].setAttribute('aria-current','true');
        }
      });
    }, {rootMargin:'-40% 0px -55% 0px'});
    Object.keys(links).forEach(function(id){ io.observe(document.getElementById(id)); });
  }

  /* Stat count-up — numbers roll up from 0 the first time they scroll into view */
  (function(){
    var stats = [].slice.call(document.querySelectorAll('.stat b'));
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if(!stats.length || reduce || !('IntersectionObserver' in window)) return;
    var ease = function(t){ return 1 - Math.pow(1 - t, 4); };
    var items = stats.map(function(b){
      var node = b.firstChild;                                   // e.g. "~50%", "80%+", "4.58" (+ <small>/5</small>)
      if(!node || node.nodeType !== 3) return null;
      var m = node.nodeValue.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/);  // prefix · number · suffix
      if(!m) return null;                                        // placeholders like "—" are left alone
      var decimals = (m[2].split('.')[1] || '').length;
      node.nodeValue = m[1] + (0).toFixed(decimals) + m[3];
      return {b:b, node:node, pre:m[1], to:parseFloat(m[2]), dec:decimals, post:m[3]};
    }).filter(Boolean);
    function run(it, delay){
      var start = null, DUR = 1400;
      function frame(t){
        if(start === null) start = t + delay;
        var p = Math.max(0, Math.min(1, (t - start) / DUR));
        it.node.nodeValue = it.pre + (it.to * ease(p)).toFixed(it.dec) + it.post;
        if(p < 1) requestAnimationFrame(frame);
      }
      requestAnimationFrame(frame);
    }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(!e.isIntersecting) return;
        io.unobserve(e.target);
        items.forEach(function(it, i){ if(e.target.contains(it.b)) run(it, i * 120); });
      });
    }, {threshold:0.5});
    var groups = [];
    items.forEach(function(it){ var g = it.b.closest('.stats'); if(groups.indexOf(g) < 0){ groups.push(g); io.observe(g); } });
  })();

  /* Prototype recordings — play while on screen, pause when scrolled away; tap to pause / resume.
     With reduced motion, nothing plays until the viewer presses play. */
  (function(){
    var wraps = [].slice.call(document.querySelectorAll('.iphone-video'));
    if(!wraps.length) return;
    var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var icon = '<svg viewBox="0 0 16 16" aria-hidden="true"><path fill="currentColor" d="M3 1.5v13l11-6.5z"/></svg>';
    wraps.forEach(function(w){
      var v = w.querySelector('video');
      var btn = document.createElement('button');
      btn.type = 'button'; btn.className = 'play'; btn.innerHTML = icon;
      btn.setAttribute('aria-label', 'Play ' + (v.getAttribute('aria-label') || 'recording'));
      w.appendChild(btn);
      v.addEventListener('play', function(){ w.classList.add('is-playing'); });
      v.addEventListener('pause', function(){ w.classList.remove('is-playing'); });
      function play(){ var p = v.play(); if(p && p.catch) p.catch(function(){}); }
      btn.addEventListener('click', function(){ w.dataset.paused = ''; play(); });
      v.addEventListener('click', function(){ if(v.paused){ w.dataset.paused = ''; play(); } else { w.dataset.paused = '1'; v.pause(); } });
    });
    if(reduce || !('IntersectionObserver' in window)) return;
    var inView = [];
    function autoplay(w){ if(w.dataset.paused !== '1'){ var p = w.querySelector('video').play(); if(p && p.catch) p.catch(function(){}); } }
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        var w = e.target, v = w.querySelector('video'), i = inView.indexOf(w);
        if(e.isIntersecting && e.intersectionRatio >= 0.6){ if(i < 0) inView.push(w); autoplay(w); }
        else { if(i > -1) inView.splice(i, 1); if(!v.paused) v.pause(); }
      });
    }, {threshold:[0, 0.6]});
    wraps.forEach(function(w){ io.observe(w); });
    /* Browsers refuse to start video in a hidden tab — retry when the tab comes back */
    document.addEventListener('visibilitychange', function(){ if(!document.hidden) inView.forEach(autoplay); });
  })();

  /* Lightbox — click any figure image to enlarge */
  var lb = document.querySelector('.lightbox');
  if(lb && lb.showModal){
    var lbImg = lb.querySelector('img'), lbCap = lb.querySelector('p');
    document.querySelectorAll('img[data-zoom]').forEach(function(im){
      im.tabIndex = 0;
      im.setAttribute('role','button');
      function openLb(){
        lbImg.src = im.dataset.full || im.currentSrc || im.src; lbImg.alt = im.alt;
        var fc = im.closest('figure') && im.closest('figure').querySelector('figcaption');
        lbCap.textContent = fc ? fc.textContent : '';
        lb.showModal();
      }
      im.addEventListener('click', openLb);
      im.addEventListener('keydown', function(e){ if(e.key==='Enter'||e.key===' '){ e.preventDefault(); openLb(); } });
    });
    lb.addEventListener('click', function(e){ if(e.target === lb || e.target.closest('.x')) lb.close(); });
  }
})();
