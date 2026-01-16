Add-Type -AssemblyName System.Drawing

# 64x64 favicon with 'M'
$bmp = New-Object Drawing.Bitmap 64,64
$g = [Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = 'AntiAlias'
$g.Clear([Drawing.Color]::FromArgb(255,37,99,235))
$f = New-Object Drawing.Font('Segoe UI Black',34)
$sf = New-Object Drawing.StringFormat
$sf.Alignment='Center'
$sf.LineAlignment='Center'
$g.DrawString('M',$f,[Drawing.Brushes]::White,(New-Object Drawing.RectangleF(0,0,64,64)),$sf)
$bmp.Save('public/favicon.png',[Drawing.Imaging.ImageFormat]::Png)
$fs = [IO.File]::Create('public/favicon.ico')
$icon = [System.Drawing.Icon]::FromHandle($bmp.GetHicon())
$icon.Save($fs)
$fs.Close()
$g.Dispose()
$bmp.Dispose()

# 180x180 apple touch icon
$bmp2 = New-Object Drawing.Bitmap 180,180
$g2 = [Drawing.Graphics]::FromImage($bmp2)
$g2.SmoothingMode='AntiAlias'
$g2.Clear([Drawing.Color]::FromArgb(255,12,18,40))
$brush2 = New-Object Drawing.Drawing2D.LinearGradientBrush((New-Object Drawing.Rectangle(0,0,180,180)),[Drawing.Color]::FromArgb(255,37,99,235),[Drawing.Color]::FromArgb(255,59,130,246),60)
$g2.FillRectangle($brush2,0,0,180,180)
$pen = [Drawing.Pen]::new([Drawing.Color]::FromArgb(40,255,255,255),4)
$g2.DrawEllipse($pen,10,10,160,160)
$f2 = New-Object Drawing.Font('Segoe UI Black',78)
$g2.DrawString('M',$f2,[Drawing.Brushes]::White,(New-Object Drawing.RectangleF(0,0,180,180)),$sf)
$bmp2.Save('public/apple-icon.png',[Drawing.Imaging.ImageFormat]::Png)
$g2.Dispose()
$bmp2.Dispose()
