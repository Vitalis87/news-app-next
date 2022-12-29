import sortNewsByImage from "./sortNewsByImage"

const getNews = async (categories?: Category | string) => {
  
     return fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&categories=${categories}&countries=us`).then(response => response.json()).then(data => sortNewsByImage(data))
}

const searchNews = async (term: string) => {
     return fetch(`http://api.mediastack.com/v1/news?access_key=${process.env.MEDIASTACK_API_KEY}&keywords=${term}&countries=us`).then(response => response.json()).then(data => sortNewsByImage(data))
   }

export {getNews, searchNews}
