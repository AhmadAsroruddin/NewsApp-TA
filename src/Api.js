// ApiService.js
const ApiService = {
    getNews: () => {
      return fetch(`https://newsdata.io/api/1/news?apikey=pub_33142d63b5c1ef3ecfe607ed5453305589db6`)
        .then(response => response.json())
        .catch(error => {
          console.error('Error fetching News:', error);
          throw error;
        });
    },
  
    getNewsByKey: (q) => {
      return fetch(`https://newsdata.io/api/1/news?apikey=pub_33142d63b5c1ef3ecfe607ed5453305589db6&q=${query}`)
        .then(response => response.json())
        .catch(error => {
          console.error('Error fetching News by Keyword:', error);
          throw error;
        });
    },
    // Metode lain ApiService...
  };
  
  export default ApiService;
  