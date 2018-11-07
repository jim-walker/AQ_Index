//API JS FILE

const getCountryCode = function(countryName){
    const queryURL = `https://restcountries.eu/rest/v2/name/${countryName}`;
    $.ajax({
      url: queryURL,
      method: 'GET'
    }).then(function(response) {
      getAQ(response[0].alpha2Code);
    })
  } 

//Build the query URL for the ajax request to the  Rest Country API
const queryURL = `https:/.restcountries.eu/rest/v2/name/${countryName}`;

//Build the query URL for the ajax request to the  Open AQ API
