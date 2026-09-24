@echo off
title Land Solution - Web Server
cd /d "%~dp0"
echo ======================================================================
echo          LAND SOLUTION - WEB VERSION LAUNCHER
echo ======================================================================
echo.
echo Starting local web server on port 8080...
echo.

:: Get local IP address for phone/network testing
for /f "tokens=4" %%a in ('route print^|find " 0.0.0.0"') do (
    set LOCAL_IP=%%a
    goto :ip_found
)
:ip_found

echo [OK] Web server is starting!
echo.
echo - Local PC URL:       http://localhost:8080
if defined LOCAL_IP (
    echo - Phone / Wi-Fi URL:  http://%LOCAL_IP%:8080
)
echo.
echo Opening browser...
start http://localhost:8080
echo.
echo Press Ctrl+C in this window when you want to stop the server.
echo.
python -m http.server 8080 --bind 0.0.0.0
pause