# PowerShell script to convert SVG files to PNG and create icon files

# Check if logo.png exists
$logoPng = "public/logo.png"
if (Test-Path $logoPng) {
    Write-Host "Logo.png found" -ForegroundColor Green
    
    # Create icon-192.png from logo.png
    [void][System.Reflection.Assembly]::LoadWithPartialName('System.drawing')
    
    # Load logo.png and resize to 192x192
    $img = [System.Drawing.Image]::FromFile((Resolve-Path $logoPng).Path)
    $bitmap = New-Object System.Drawing.Bitmap(192, 192)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.DrawImage($img, 0, 0, 192, 192)
    $bitmap.Save("public/icon-192.png")
    $graphics.Dispose()
    $bitmap.Dispose()
    $img.Dispose()
    
    Write-Host "Created icon-192.png" -ForegroundColor Green
    
    # Load logo.png and resize to 512x512
    $img = [System.Drawing.Image]::FromFile((Resolve-Path $logoPng).Path)
    $bitmap = New-Object System.Drawing.Bitmap(512, 512)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $graphics.DrawImage($img, 0, 0, 512, 512)
    $bitmap.Save("public/icon-512.png")
    $graphics.Dispose()
    $bitmap.Dispose()
    $img.Dispose()
    
    Write-Host "Created icon-512.png" -ForegroundColor Green
} else {
    Write-Host "logo.png not found" -ForegroundColor Red
}

# Delete SVG files that are not needed (assuming we are using logo.png instead)
$svgFiles = @("public/favicon.svg", "public/file.svg", "public/globe.svg", "public/next.svg", "public/vercel.svg", "public/window.svg")
foreach ($svg in $svgFiles) {
    if (Test-Path $svg) {
        Remove-Item $svg -Force
        Write-Host "Deleted $svg" -ForegroundColor Green
    }
}

Write-Host "SEO optimization complete - All images are now PNG format" -ForegroundColor Green
