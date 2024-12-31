if not exist build (echo please wait while we compile the react & npm run build & start publish.bat)
if not exist ghPages git clone https://github.com/Rockittyy/APEM ghPages/ --no-checkout
cd ghPages
git checkout gh-pages
cd ../
xcopy /y /h /f /e "ghPages/.git" "buffer/.git/"
rmdir /s /q "ghPages/"
xcopy /y /h /f /e "build/*" "ghPages/"
xcopy /y /h /f /e "buffer/.git" "ghPages/.git/"
rmdir /s /q "buffer/"
cd ghPages
git add --all
git commit -m "update"
git push


pause