import { categories } from "../constants";
import { getNews } from '../lib/fetchNews';
import NewsList from "./NewsList";

async function Homepage() {
    const news: NewsResponse = await getNews(categories.join(','));

  return (
    <div>
        <NewsList news={news}/>
    </div>
  )
}

export default Homepage