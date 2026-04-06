@echo off
cd /d "%~dp0"
git add data.js data-del2.js
git commit -m "Uppdaterad data"
git push
pause
