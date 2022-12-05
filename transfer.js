const fs = require('fs');
let college_info = JSON.parse(fs.readFileSync('data/colleges.json', 'utf8'));

for(college in college_info){
  if(fs.existsSync('docs/'+college+'.html'))
    fs.unlinkSync('docs/'+college+'.html');
}

//manually unlinking all other files
if(fs.existsSync('docs/index.html'))
fs.unlinkSync('docs/index.html');

if(fs.existsSync('docs/styles.css'))
fs.unlinkSync('docs/styles.css');

if(fs.existsSync('docs/about.html'))
fs.unlinkSync('docs/about.html');

if(fs.existsSync('docs/macrolofiemmett.jpeg'))
fs.unlinkSync('docs/macrolofiemmett.jpeg');

if(fs.existsSync('docs/microlofiemmett.jpeg'))
fs.unlinkSync('docs/microlofiemmett.jpeg');

if(fs.existsSync('docs/macrolofioscar.jpg'))
fs.unlinkSync('docs/macrolofioscar.jpg');

if(fs.existsSync('docs/microlofioscar.jpg'))
fs.unlinkSync('docs/microlofioscar.jpg');

//copying all neccesary files over
fs.copyFileSync('src/styles.css','docs/styles.css');
//fs.copyFileSync('src/about.html','docs/about.html');
fs.copyFileSync('src/macrolofiemmett.jpeg','docs/macrolofiemmett.jpeg');
fs.copyFileSync('src/microlofiemmett.jpeg','docs/microlofiemmett.jpeg');
fs.copyFileSync('src/macrolofioscar.jpg','docs/macrolofioscar.jpg');
fs.copyFileSync('src/microlofioscar.jpg','docs/microlofioscar.jpg');
