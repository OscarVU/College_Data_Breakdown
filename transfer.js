const fs = require('fs');
let college_info = JSON.parse(fs.readFileSync('data/colleges.json', 'utf8'));

for(college in college_info){
  fs.unlinkSync('public/'+college+'.html');
}
//manually unlinking all other files

fs.unlinkSync('public/macro.html');
fs.unlinkSync('public/styles.css');
fs.unlinkSync('public/about.html')
fs.unlinkSync('public/macrolofiemmett.jpeg');
fs.unlinkSync('public/microlofiemmett.jpeg');
fs.unlinkSync('public/macrolofioscar.jpg');
fs.unlinkSync('public/microlofioscar.jpg');

//copying all neccesary files over
fs.copyFileSync('src/styles.css','public/styles.css');
fs.copyFileSync('src/about.html','public/about.html')
fs.copyFileSync('src/macrolofiemmett.jpeg','public/macrolofiemmett.jpeg');
fs.copyFileSync('src/microlofiemmett.jpeg','public/microlofiemmett.jpeg');
fs.copyFileSync('src/macrolofioscar.jpg','public/macrolofioscar.jpg');
fs.copyFileSync('src/microlofioscar.jpg','public/microlofioscar.jpg');
