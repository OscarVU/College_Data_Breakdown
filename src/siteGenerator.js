const fs = require('fs');
const ejs = require('ejs');

let college_info = JSON.parse(fs.readFileSync('../data/colleges.json', 'utf8'));//change name to college file
let macro_template = fs.readFileSync('views/macro.ejs', 'utf8');
let micro_template = fs.readFileSync('views/micro.ejs', 'utf8');
let about_template = fs.readFileSync('views/about.ejs', 'utf8');

/*
  1) Generate a web page for each character
  2) Keep track of the link for index.html
*/
for (college in college_info){
  let college_html = ejs.render(micro_template, {
    filename: __dirname + '/views/micro.ejs',
    stats: college_info[college],

    name: college
  });
  college.link = getBetterFileName(college);
  fs.writeFileSync('../'+college+'.html', college_html, 'utf8');
}

//generating the about page
let about_html = ejs.render(about_template, {
  filename: __dirname + '/views/about.ejs'
});
fs.writeFileSync('../about.html', about_html, 'utf8');
/*
  1) Generate an index page of all characters
*/

let macro_html = ejs.render(macro_template, {
  filename: __dirname + '/views/macro.ejs',
  data: college_info
});

fs.writeFileSync('../index.html', macro_html, 'utf8');

function getBetterFileName(characterName){
  let betterFileName = characterName.split(" ").join("_");
  betterFileName = betterFileName.split(".").join("");
  betterFileName = betterFileName.split("(").join("");
  betterFileName = betterFileName.split(")").join("");
  return betterFileName;
}
