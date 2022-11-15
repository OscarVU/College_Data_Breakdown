const fs = require('fs');//includes the library in your code

let collegesObject = {};

let colleges_csv = fs.readFileSync('college_data.csv', 'utf8');

let collegeArray = colleges_csv.split("\n");

collegeArray.forEach(function(college) {
  let college_info_array = college.split(';');

  let college_ID = college_info_array[0];
  //adding object values
  if(college_ID != "name"){

    let idvCollegeStats = [];
    //indvCollegeStats: [0]apps,[1]accept,[2]enroll,[3]top25perc,[4]phd,[5]s_f_ratio,[6]expend,[7]grad_rate
    for(let i = 1; i <=8; i++){
      idvCollegeStats.append(college_info_array[i]);
    }
    collegesObject[college_ID] = idvCollegeStats;
  }
});

fs.writeFileSync('colleges.json', JSON.stringify(collegesObject), 'utf8');//generates JSON file
