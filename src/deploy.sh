git add . &&
git commit -m "$1" &&
git push origin master &&
npm run build &&
cd build &&
mv index.html 200.html &&
npx surge --domain http://vkusoteria.surge.sh