const fs = require('fs');
let college_info = JSON.parse(fs.readFileSync('data/colleges.json', 'utf8'));

for(college in college_info){
  if(fs.existsSync('public/'+college+'.html'))
    fs.unlinkSync('public/'+college+'.html');
}

//manually unlinking all other files
if(fs.existsSync('public/macro.html'))
fs.unlinkSync('public/macro.html');

if(fs.existsSync('public/styles.css'))
fs.unlinkSync('public/styles.css');

if(fs.existsSync('public/about.html'))
fs.unlinkSync('public/about.html');

if(fs.existsSync('public/macrolofiemmett.jpeg'))
fs.unlinkSync('public/macrolofiemmett.jpeg');

if(fs.existsSync('public/microlofiemmett.jpeg'))
fs.unlinkSync('public/microlofiemmett.jpeg');

if(fs.existsSync('public/macrolofioscar.jpg'))
fs.unlinkSync('public/macrolofioscar.jpg');

if(fs.existsSync('public/microlofioscar.jpg'))
fs.unlinkSync('public/microlofioscar.jpg');

//copying all neccesary files over
fs.copyFileSync('src/styles.css','public/styles.css');
//fs.copyFileSync('src/about.html','public/about.html');
fs.copyFileSync('src/macrolofiemmett.jpeg','public/macrolofiemmett.jpeg');
fs.copyFileSync('src/microlofiemmett.jpeg','public/microlofiemmett.jpeg');
fs.copyFileSync('src/macrolofioscar.jpg','public/macrolofioscar.jpg');
fs.copyFileSync('src/microlofioscar.jpg','public/microlofioscar.jpg');
