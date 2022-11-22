const fs = require('fs');//includes the library in your code

let collegesObject = {};

let colleges_csv = fs.readFileSync('college_data.csv', 'utf8');

let collegeArray = colleges_csv.split("\n");

collegeArray.forEach(function(college) {
  let college_info_array = college.split(',');

  let college_ID = college_info_array[0];

  //adding object values
  if(college_ID != "name"){

    let idvCollegeStats = {};
    //indvCollegeStats: [0]apps,[1]accept,[2]enroll,[3]top25perc,[4]phd,[5]s_f_ratio,[6]expend,[7]grad_rate
    idvCollegeStats['apps'] = college_info_array[1]
    idvCollegeStats['accept'] = college_info_array[2]
    idvCollegeStats['enroll'] = college_info_array[3]
    idvCollegeStats['top25perc'] = college_info_array[4]
    idvCollegeStats['phd'] = college_info_array[5]
    idvCollegeStats['s_f_ratio'] = college_info_array[6]
    idvCollegeStats['expend'] = college_info_array[7]
    idvCollegeStats['grad_rate'] = college_info_array[8]
    collegesObject[college_ID] = idvCollegeStats;
  }
});


fs.writeFileSync('colleges.json', JSON.stringify(collegesObject), 'utf8');//generates JSON file
