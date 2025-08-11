Param(
  [string]$TargetRepo = "C:\Users\fredd\OneDrive\Documentos\Escritorio\solApp\web\sol-web",
  [string]$msg    = "Deploy web build: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
)

# 0. Remove old web build
flutter clean

# 1. Build for web
flutter build web
if ($LASTEXITCODE -ne 0) {
  Write-Error "Build failed"; exit 1
}


# 2. Copy files (force overwrite, remove stale)
# Clean everything except the .git folder
Get-ChildItem -Path $TargetRepo -Force |
  Where-Object { $_.Name -ne '.git' } |
  Remove-Item -Recurse -Force
Copy-Item ".\build\web\*" -Destination $TargetRepo -Recurse -Force

# 3. Commit & push
Push-Location $TargetRepo
git add -A
if (-not (git diff --cached --quiet)) {
  git commit -m $msg
  git push origin 'main'
} else {
  Write-Host "No changes to commit on 'main'."
}

Pop-Location