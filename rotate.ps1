Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile("d:\Project\french-toast\public\hero.png")
$img.RotateFlip([System.Drawing.RotateFlipType]::Rotate90FlipNone)
$img.Save("d:\Project\french-toast\public\hero_rot.png", [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()
