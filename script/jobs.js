// LinkedIn Jobs API settings
const apiSettings = {
    async: true,
    crossDomain: true,
    url: "https://rapid-linkedin-jobs-api.p.rapidapi.com/search-jobs",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6dfc42ca1dmshf42eb6a8f439983p1856f6jsn0a4eb5d6e779",
      "X-RapidAPI-Host": "rapid-linkedin-jobs-api.p.rapidapi.com",
    },
  };

  // Display jobs on the page
  const displayJobs = (jobs) => {
    const jobContainer = $("#job-container");
    jobContainer.empty();

    if (jobs && jobs.length > 0) {
      jobs.forEach((job) => {
        const jobDiv = $("<div>").addClass("job");
        const title = $("<h2>").text(job.title.text);
        const company = $("<p>").text(job.company.name);
        const location = $("<p>").text(job.location.displayName);

        jobDiv.append(title);
        jobDiv.append(company);
        jobDiv.append(location);

        jobContainer.append(jobDiv);
      });
    } else {
      const noResults = $("<p>").text("No results found.");
      jobContainer.append(noResults);
    }
  };

  // Search for jobs when the form is submitted
  $("#job-search-form").submit((event) => {
    event.preventDefault();
    const searchQuery = $("#search-query").val();

    // Update the API settings with the search query
    apiSettings.url = `https://rapid-linkedin-jobs-api.p.rapidapi.com/search-jobs?keywords=${searchQuery}&locationId=92000000&datePosted=anyTime&sort=mostRelevant`;

    // Make the API request
    $.ajax(apiSettings).done((response) => {
      console.log(response)
      displayJobs(response.data);
    });
  });