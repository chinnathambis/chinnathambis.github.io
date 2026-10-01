#!/bin/sh
# Regenerates responsive images: assets/case/_src/<project>/*.png  ->  assets/case/<project>/
# Needs: cwebp (brew install webp), sips (macOS).
set -e
cd "$(dirname "$0")"
for dir in _src/*/; do
  proj=$(basename "$dir"); mkdir -p "$proj"
  for f in "$dir"*.png; do
    name=$(basename "$f" .png)
    ow=$(sips -g pixelWidth "$f" | awk '/pixelWidth/{print $2}')
    case "$name" in
      cover-*)                 widths="400 600 800"; fb=600 ;;
      research-*|redlines)     widths="640 960 1280 1600"; fb=960 ;;
      *)                       widths="320 480 640"; fb=480 ;;
    esac
    last=0
    for w in $widths; do
      if [ "$w" -gt "$ow" ]; then
        # use the native width only if it's meaningfully bigger than the last size made
        [ $((ow * 100)) -le $((last * 115)) ] && break
        w=$ow
      fi
      last=$w
      cwebp -quiet -q 82 -sharp_yuv -resize "$w" 0 "$f" -o "$proj/$name-$w.webp"
    done
    [ "$fb" -gt "$ow" ] && fb=$ow
    sips --resampleWidth "$fb" "$f" --out "$proj/$name.png" >/dev/null
  done
done
