@echo off
cd /d "%~dp0"
git add data.js data-del2.js calendar.js calendar.css index.html del1.html del2.html
git commit -m "Uppdaterad data"
git push
pause
