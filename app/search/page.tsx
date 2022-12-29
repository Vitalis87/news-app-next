import { searchNews } from "../../lib/fetchNews";
import NewsList from "../NewsList";


type Props = {
    searchParams: {term: string}
}

async function SearchPage({searchParams}: Props) {
    const news: NewsResponse = await searchNews(searchParams?.term);
    
  return (
    <div>
        <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
        <NewsList news={news}/>
    </div>
  )
}

export default SearchPage