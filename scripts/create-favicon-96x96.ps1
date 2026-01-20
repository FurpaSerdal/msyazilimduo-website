# Create 96x96 PNG favicon from SVG
# This script creates a PNG favicon by converting the SVG

# For now, copy favicon.png and scale it
$svg = @'
<svg width="96" height="96" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#2563eb;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#1e40af;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <rect width="32" height="32" rx="6" fill="url(#bg)"/>
  
  <!-- Code symbol < / > -->
  <g transform="translate(6, 8)">
    <path d="M 6 0 L 2 0 L 0 4 L 0 12 L 2 16 L 6 16" 
          stroke="#93c5fd" 
          stroke-width="2" 
          stroke-linecap="round" 
          fill="none"/>
    
    <path d="M 14 0 L 18 0 L 20 4 L 20 12 L 18 16 L 14 16" 
          stroke="#93c5fd" 
          stroke-width="2" 
          stroke-linecap="round" 
          fill="none"/>
    
    <line x1="8" y1="4" x2="12" y2="12" 
          stroke="#60a5fa" 
          stroke-width="2" 
          stroke-linecap="round"/>
  </g>
</svg>
'@

$svg | Out-File -FilePath "$PSScriptRoot\..\public\favicon-96x96.svg" -Encoding UTF8
Write-Host "favicon-96x96.svg created"

# Since we can't easily create PNG without additional tools, we'll use the SVG with 96x96 size attribute
Write-Host "To convert to PNG, use: https://convertio.co/svg-png/ or similar tool"
