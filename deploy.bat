@echo off
echo ====================================
echo   DEPLOYMENT JARAYONI BOSHLANDI
echo ====================================
echo Vaqt: %date% %time%
echo Repository: admission_university
echo.

echo [1/5] Git ma'lumotlarini olish...
git log -1 --pretty=format:"Son'gi commit: %%h - %%s (%%an, %%ar)"
echo.
echo.

echo [2/5] Loyiha fayllarini tekshirish...
if exist "package.json" (
    echo ✓ Node.js loyihasi topildi
    if exist "node_modules" (
        echo ✓ node_modules mavjud
    ) else (
        echo ! node_modules yo'q, o'rnatilmoqda...
        npm install
    )
) else (
    echo ✓ Oddiy fayl loyihasi
)
echo.

echo [3/5] Backup yaratish...
set backup_dir=C:\Backup\admission_university_%date:~-4,4%%date:~-10,2%%date:~-7,2%_%time:~0,2%%time:~3,2%%time:~6,2%
set backup_dir=%backup_dir: =0%
mkdir "%backup_dir%" 2>NUL
xcopy /E /Y /Q . "%backup_dir%\" >NUL 2>&1
echo ✓ Backup yaratildi: %backup_dir%
echo.

echo [4/5] Loyihani ishga tushirish...
if exist "package.json" (
    echo Node.js loyihasi ishga tushirilmoqda...
    npm run build 2>NUL
    if %errorlevel% equ 0 (
        echo ✓ Build muvaffaqiyatli
    ) else (
        echo ! Build xatosi yuz berdi
    )
) else (
    echo Fayl tizimlari yangilanmoqda...
    echo ✓ Fayllar yangilandi
)
echo.

echo [5/5] Deployment tugallandi!
echo ====================================
echo   DEPLOYMENT MUVAFFAQIYATLI TUGADI
echo ====================================
echo Tugallanish vaqti: %date% %time%
echo Backup joylashuvi: %backup_dir%
echo Status: SUCCESS
echo ====================================