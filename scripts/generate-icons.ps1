Add-Type -AssemblyName System.Drawing

function New-BrandIcon {
    param(
        [int]$Size,
        [string]$OutPng,
        [string]$Text
    )

    $bmp = New-Object Drawing.Bitmap $Size, $Size
    $g = [Drawing.Graphics]::FromImage($bmp)
    $g.SmoothingMode = 'AntiAlias'

    $rect = New-Object Drawing.Rectangle 0, 0, $Size, $Size

    # Gradient background (navy → blue)
    $bg = New-Object Drawing.Drawing2D.LinearGradientBrush $rect, ([Drawing.Color]::FromArgb(255,15,23,42)), ([Drawing.Color]::FromArgb(255,37,99,235)), 60
    $g.FillRectangle($bg, $rect)

    # Soft border for depth
    $border = New-Object Drawing.Pen ([Drawing.Color]::FromArgb(80,255,255,255)), 2
    $g.DrawRectangle($border, 1, 1, $Size - 3, $Size - 3)

    # Centered logotype
    $fontSize = if ($Size -le 64) { 28 } else { 78 }
    $font = New-Object Drawing.Font('Segoe UI Black', $fontSize, [Drawing.FontStyle]::Bold)
    $sf = New-Object Drawing.StringFormat
    $sf.Alignment = 'Center'
    $sf.LineAlignment = 'Center'
    $g.DrawString($Text, $font, [Drawing.Brushes]::White, (New-Object Drawing.RectangleF(0,0,$Size,$Size)), $sf)

    $g.Dispose()
    $bmp.Save($OutPng, [Drawing.Imaging.ImageFormat]::Png)
    return $bmp
}

# Brand letter: use "MS" to match MSYazılımDuo
$small = New-BrandIcon -Size 64 -OutPng 'public/favicon.png' -Text 'MS'
$fs = [IO.File]::Create('public/favicon.ico')
$icon = [System.Drawing.Icon]::FromHandle($small.GetHicon())
$icon.Save($fs)
$fs.Close()
$small.Dispose()

$apple = New-BrandIcon -Size 180 -OutPng 'public/apple-icon.png' -Text 'MS'
$apple.Dispose()
