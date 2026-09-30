/* Shared behaviour for every page: theme, header, reveals, placeholder links. */
(function(){
  'use strict';
  var root = document.documentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* ---------- Theme toggle (night default, day opt-in) ---------- */
  var toggle = document.querySelector('.theme-toggle');
  function isLight(){ return root.getAttribute('data-theme') === 'light'; }
  function syncToggle(){
    if(!toggle) return;
    toggle.textContent = isLight() ? '☾' : '☀';
    toggle.setAttribute('aria-label', isLight() ? 'Switch to night theme' : 'Switch to day theme');
    var meta = document.querySelector('meta[name="theme-color"]');
    if(meta) meta.setAttribute('content', isLight() ? '#F6F5F1' : '#16151B');
  }
  if(toggle){
    toggle.addEventListener('click', function(){
      if(isLight()) root.removeAttribute('data-theme');
      else root.setAttribute('data-theme','light');
      try{ localStorage.setItem('theme', isLight() ? 'light' : 'dark'); }catch(e){}
      syncToggle();
    });
  }
  syncToggle();

  /* ---------- Header: hairline once scrolled, hide on scroll down ---------- */
  var header = document.querySelector('.site-header');
  if(header){
    var lastY = window.scrollY, ticking = false;
    function onScroll(){
      var y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 8);
      if(!reduceMotion){
        var down = y > lastY && y > 240;
        header.classList.toggle('is-hidden', down && !header.contains(document.activeElement));
      }
      lastY = y; ticking = false;
    }
    window.addEventListener('scroll', function(){
      if(!ticking){ ticking = true; requestAnimationFrame(onScroll); }
    }, {passive:true});
    onScroll();
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('[data-reveal]');
  if(reduceMotion || !('IntersectionObserver' in window)){
    revealEls.forEach(function(el){ el.classList.add('is-in'); });
  }else{
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting){ e.target.classList.add('is-in'); io.unobserve(e.target); }
      });
    }, {rootMargin:'0px 0px -8% 0px', threshold:0.08});
    revealEls.forEach(function(el){ io.observe(el); });
  }

  /* ---------- Placeholder links: say so honestly instead of pretending ---------- */
  var toast;
  function showToast(msg){
    if(!toast){
      toast = document.createElement('div');
      toast.className = 'toast';
      toast.setAttribute('role','status');
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('is-on');
    clearTimeout(showToast._t);
    showToast._t = setTimeout(function(){ toast.classList.remove('is-on'); }, 2600);
  }
  document.addEventListener('click', function(e){
    var a = e.target.closest('[data-placeholder]');
    if(!a) return;
    e.preventDefault();
    showToast(a.getAttribute('data-placeholder'));
  });

  window.__site = { showToast: showToast, reduceMotion: reduceMotion };
})();
