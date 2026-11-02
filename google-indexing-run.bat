@echo off
title BR Bhatta - Google Instant Indexing API
cd /d "%~dp0"

echo ======================================================================
echo   BR Bhatta - Official Google Search Instant Indexing API Tool
echo ======================================================================
echo.
echo Pushing latest URLs directly to Google Indexing API...
echo.

node scripts/google_indexing.js %*

echo.
echo ======================================================================
pause
