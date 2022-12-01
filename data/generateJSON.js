const fs = require('fs');//includes the library in your code

let collegesObject = {};

let colleges_csv = fs.readFileSync('college_data.csv', 'utf8');

let collegeArray = colleges_csv.split("\n");

let phdAvg = 0;
let sfratioAvg = 0;
let expendAvg = 0;
let gradrateAvg = 0;

collegeArray.forEach(function(college) {
  let college_info_array = college.split(',');
  let college_ID = college_info_array[0];
  if(college_ID != "name"){
    let phd = parseInt(college_info_array[5]);
    let sfratio = parseInt(college_info_array[6]);
    let expend = parseInt(college_info_array[7]);
    let gradrate = parseInt(college_info_array[8])
    if(!(isNaN(phd)))
      phdAvg += phd;
    if(!(isNaN(sfratio)))
      sfratioAvg += sfratio;
    if(!(isNaN(expend)))
      expendAvg += expend;
    if(!(isNaN(gradrate)))
      gradrateAvg += gradrate;
  }
});
phdAvg = phdAvg/777;
sfratioAvg = sfratioAvg/777;
expendAvg = expendAvg/777;
gradrateAvg = gradrateAvg/777;
collegeArray.forEach(function(college) {
  let college_info_array = college.split(',');

  let college_ID = college_info_array[0];

  //adding object values
  if(college_ID != "name"){

    let idvCollegeStats = {};
    //indvCollegeStats: [0]apps,[1]accept,[2]enroll,[3]top25perc,[4]phd,[5]s_f_ratio,[6]expend,[7]grad_rate
    idvCollegeStats['apps'] = college_info_array[1];
    idvCollegeStats['accept'] = college_info_array[2];
    idvCollegeStats['enroll'] = college_info_array[3];
    idvCollegeStats['top25perc'] = college_info_array[4];
    idvCollegeStats['phd'] = college_info_array[5];
    idvCollegeStats['s_f_ratio'] = college_info_array[6]
    idvCollegeStats['expend'] = college_info_array[7]
    idvCollegeStats['grad_rate'] = college_info_array[8]
    idvCollegeStats['accept_rate'] = parseInt(idvCollegeStats['accept'])/parseInt(idvCollegeStats['apps']);
    idvCollegeStats['inst_avg'] = (parseInt(idvCollegeStats['phd'])/phdAvg + parseInt(college_info_array[6])/sfratioAvg+parseInt(college_info_array[7])/expendAvg+parseInt(college_info_array[8])/gradrateAvg)/2.19;
    collegesObject[college_ID] = idvCollegeStats;
  }
});



fs.writeFileSync('colleges.json', JSON.stringify(collegesObject), 'utf8');//generates JSON file
