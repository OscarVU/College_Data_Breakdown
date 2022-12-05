var ghpages = require('gh-pages');

ghpages.publish('dist', function(err) {});

ghpages.publish('public',{
  repo: 'https://github.com/OscarVU/College_Data_Breakdown',
  message: 'Auto-generated commit',
  user: {
    name: 'OscarVU',
    email: 'oscar.uzdelewicz23@trinityschoolnyc.org'
  }
});
