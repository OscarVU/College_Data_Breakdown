const fs = require('fs');
const ejs = require('ejs');

let college_info = JSON.parse(fs.readFileSync('../data/potter.json', 'utf8'));//change name to college file
let index_template = fs.readFileSync('views/index.ejs', 'utf8');
let college_template = fs.readFileSync('views/character.ejs', 'utf8');

/*
  1) Generate a web page for each character
  2) Keep track of the link for index.html
*/
for (character in college_info){
  let character_html = ejs.render(college_template, {
    filename: __dirname + '/views/character.ejs',
    stats: college_info[character],
    name: character
  });
  college_info[character].link = getBetterFileName(character);
  fs.writeFileSync('../public/'+college_info[character].link+'.html', character_html, 'utf8');

}

/*
  1) Generate an index page of all characters
*/
let index_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',
  data: college_info
});

fs.writeFileSync('../public/index.html', index_html, 'utf8');

function getBetterFileName(characterName){
  let betterFileName = characterName.split(" ").join("_");
  betterFileName = betterFileName.split(".").join("");
  betterFileName = betterFileName.split("(").join("");
  betterFileName = betterFileName.split(")").join("");
  return betterFileName;
}
