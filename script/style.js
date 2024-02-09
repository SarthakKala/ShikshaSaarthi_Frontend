// function displayJobs(jobs) {
//     const jobContainer = document.getElementById('job-container');
//     jobContainer.innerHTML = '';

//     jobs.forEach(job => {
//         const jobDiv = document.createElement('div');
//         jobDiv.className = 'job';

//         const title = document.createElement('h2');
//         title.textContent = job.title;

//         const company = document.createElement('h3');
//         company.textContent = job.company;

//         const location = document.createElement('p');
//         location.textContent = job.location;

//         jobDiv.appendChild(title);
//         jobDiv.appendChild(company);
//         jobDiv.appendChild(location);

//         jobContainer.appendChild(jobDiv);
//     });
// }

// function searchJobs(query) 
// {
//     const settings = {
//         async: true,
//         crossDomain: true,
//         url: `https://indeed12.p.rapidapi.com/jobs/search?query=${query}&location=chicago&page_id=1&fromage=3&radius=50`,
//         method: 'GET',
//         headers: {
//             'X-RapidAPI-Key': '05acfd8d5amshdcdf88de3727b2ap1241b5jsnaf091933d1ff',
//             'X-RapidAPI-Host': 'indeed12.p.rapidapi.com'
//         }
//     };

// function searchJobs(query) { 
//     $.ajax(settings).done(function (response) { 
//         console.log(response); 
//     }).fail(function (error) { console.log(error); 
//     }); 
// }

// const searchInput = document.querySelector('.search input');

// searchInput.addEventListener('input', function () { 
//     const query = searchInput.value; 
//     searchJobs(query);
//     setTimeout(function () { 
//         searchJobs(query); 
//     }, 1000)
// });
// }
// Add a delay of 1 second between requests });


    // $.ajax(settings).done(function (response) {
    //     displayJobs(response.results);
    // }).fail(function (error) {
    //     console.log(error);
    // });

// document.getElementById('search-btn').addEventListener('click', function () {
//     const query = document.getElementById('job-search').value;
//     searchJobs(query);
// });




const searchJobs = (query) => {
    const settings = {
      async: true,
      crossDomain: true,
      url: `https://rapid-linkedin-jobs-api.p.rapidapi.com/search-jobs?keywords=${query}&locationId=92000000&datePosted=anyTime&sort=mostRelevant`,
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '6dfc42ca1dmshf42eb6a8f439983p1856f6jsn0a4eb5d6e779',
        'X-RapidAPI-Host': 'rapid-linkedin-jobs-api.p.rapidapi.com'
      }
    };
  
    $.ajax(settings).done((response) => {
      displayJobs(response.matches);
    }).fail((error) => {
      console.log(error);
    });
};



const displayJobs = (jobs) => {
    const jobContainer = document.getElementById('jobContainer');
    jobContainer.innerHTML = '';
  
    jobs.forEach((job) => {
      const jobDiv = document.createElement('div');
      jobDiv.classList.add('job');
  
      const title = document.createElement('h2');
      title.textContent = job.title.text;
  
      const company = document.createElement('p');
      company.textContent = job.company.name;
  
      const location = document.createElement('p');
      location.textContent = job.location.displayName;
  
      jobDiv.appendChild(title);
      jobDiv.appendChild(company);
      jobDiv.appendChild(location);
  
      jobContainer.appendChild(jobDiv);
    });
};



const searchButton = document.getElementById('searchButton');
const jobSearchInput = document.getElementById('jobSearchInput');

searchButton.addEventListener('click', () => {
  const query = jobSearchInput.value;
  searchJobs(query);
});
