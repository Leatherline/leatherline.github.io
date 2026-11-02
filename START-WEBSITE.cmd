@echo off
cd /d "%~dp0"
echo Starting Leatherline at http://localhost:5173/
echo Keep this window open while viewing the website.
call npm run dev
pause
