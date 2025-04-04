function searchJobs(type) {
  let results = [];
  const jobs = [{
  title: 'Software Engineer',
  family: 'engineering',
  level: 'mid',
  industry: 'it',
  language: 'english'
  },
  {
  title: 'Junior Developer',
  family: 'engineering',
  level: 'entry',
  industry: 'it',
  language: 'english'
  },
  {
  title: 'Marketing Manager',
  family: 'marketing',
  level: 'mid',
  industry: 'it',
  language: 'english'
  },
  {
  title: 'Financial Analyst',
  family: 'finance',
  level: 'entry',
  industry: 'finance',
  language: 'english'
  }
  ];

  switch (type) {
  case 'keyword':
  var keyword = document.getElementById('keyword').value.toLowerCase();
  results = jobs.filter(job =>
  job.title.toLowerCase().includes(keyword) ||
  job.family.toLowerCase().includes(keyword) ||
  job.industry.toLowerCase().includes(keyword)
  );
  break;
  case 'multiple':
  var jobFamily = document.getElementById('jobFamily').value;
  var jobLevel = document.getElementById('jobLevel').value;
  var industry = document.getElementById('industry').value;
  var language = document.getElementById('language').value;

  results = jobs.filter(job =>
  (jobFamily === '' || job.family === jobFamily) &&
  (jobLevel === '' || job.level === jobLevel) &&
  (industry === '' || job.industry === industry) &&
  (language === '' || job.language === language)
  );
  break;
  case 'title':
  var jobCategory = document.getElementById('jobCategory').value;
  results = jobs.filter(job => job.title.toLowerCase().includes(jobCategory));
  break;
  default:
  alert('Invalid search type');
  return;
  }

  displayResults(results);
 }

 function displayResults(results) {
  const container = document.querySelector('.container');
  let resultsSection = document.getElementById('results-section');

  if (resultsSection) {
  resultsSection.remove(); // Remove previous results
  }

  resultsSection = document.createElement('section');
  resultsSection.id = 'results-section';
  resultsSection.innerHTML = '<h2>Search Results:</h2>';

  if (results.length === 0) {
  resultsSection.innerHTML += '<p>No jobs found matching your criteria.</p>';
  } else {
  const list = document.createElement('ul');
  results.forEach(job => {
  const item = document.createElement('li');
  item.textContent = `${job.title} - ${job.family} - ${job.level} - ${job.industry} - ${job.language}`;
  list.appendChild(item);
  });
  resultsSection.appendChild(list);
  }

  container.appendChild(resultsSection);
 }
