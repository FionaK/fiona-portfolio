#!/usr/bin/env bash
# Downloads the portfolio images from Vzy's file host into ./images
# Run once from the project folder:  bash download-images.sh
set -e
cd "$(dirname "$0")"
mkdir -p images
BASE="https://sitefile.co/695bbde6e3642d3e067b58a9"
curl -fL -o images/fiona.png        "$BASE/1767695369523_pixelbin-ai-editor-1767695338515.png"
curl -fL -o images/gynocare-hub.png "$BASE/1767948008135_screenshot2026-01-09at11.39.43.png"
curl -fL -o images/sarufi.png       "$BASE/1767948441972_screenshot2026-01-09at11.45.35.png"
curl -fL -o images/kuishismart.png  "$BASE/1767948584653_screenshot2026-01-09at11.46.33.png"
curl -fL -o images/tazonta.png      "$BASE/1767948759992_screenshot2026-01-09at11.52.27.png"
echo "Done — images saved to ./images"
