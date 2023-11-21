// ApiService.js
const ApiService = {
  getNews: () => {
    return fetch('https://newsdata.io/api/1/news?apikey=pub_33142d63b5c1ef3ecfe607ed5453305589db6')
      .then(response => response.json())
      .catch(error => {
        console.error('Error fetching books:', error);
        throw error;
      });
  },

  getNewsbyKey: (q) => {
    return ApiService.getNews() // Mengambil seluruh daftar buku
      .then(news => news.find(news => news.q === q)) // Mencari buku berdasarkan ID
      .catch(error => {
        console.error('Error fetching book by ID:', error);
        throw error;
      });
  },
  // Metode lain ApiService...
};

export default ApiService;
