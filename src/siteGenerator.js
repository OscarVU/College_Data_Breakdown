const fs = require('fs');
const ejs = require('ejs');

let college_info = JSON.parse(fs.readFileSync('../data/colleges.json', 'utf8'));//change name to college file
let macro_template = fs.readFileSync('views/macro.ejs', 'utf8');
let micro_template = fs.readFileSync('views/micro.ejs', 'utf8');

/*
  1) Generate a web page for each character
  2) Keep track of the link for index.html
*/
for (college in college_info){
  let college_html = ejs.render(college_template, {
    filename: __dirname + '/views/micro.ejs',
    stats: college_info[college],
    apps: college_info[college][0],
    accept: college_info[college][1],
    enroll: college_info[college][2],
    top25perc: college_info[college][3],
    phd: college_info[college][4],
    s_f_ratio: college_info[college][5],
    expend: college_info[college][6],
    gradrate: college_info[college][7],
    name: college
  });
  college.link = getBetterFileName(college);
  fs.writeFileSync('../public/'+college.link+'.html', college_html, 'utf8');

}

/*
  1) Generate an index page of all characters
*/

let macro_html = ejs.render(index_template, {
  filename: __dirname + '/views/index.ejs',

  data: college_info
});

fs.writeFileSync('../public/macro.html', index_html, 'utf8');

function getBetterFileName(characterName){
  let betterFileName = characterName.split(" ").join("_");
  betterFileName = betterFileName.split(".").join("");
  betterFileName = betterFileName.split("(").join("");
  betterFileName = betterFileName.split(")").join("");
  return betterFileName;
}
