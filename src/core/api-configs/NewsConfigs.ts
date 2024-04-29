const NewsAPI={
    apiKey:"4a89fa659e9849099fd0423d481a5a77",
    baseUrl:"https://newsapi.org/v2/",
    categoryUrl:"sources",
    newsUrl:"everything",
    sourceUrl:"sources",
    authorUrl:"top-headlines?q=news"
}

const CredAPI={
    apiKey:"kJw74ZoW4KRqmRAaWSl7ddJ3jJjSqZsa",
    baseUrl:"https://api.nytimes.com/svc/",
    categoryUrl:"news/v3/content/section-list.json",
    newsUrl:"search/v2/articlesearch.json",
    sourceUrl:"news/v3/content/section-list.json",
    authorUrl:"books/v3/lists/overview.json"
}


const GuardianAPI={
    apiKey:"f4eac041-64cd-409c-94e5-55cf70b87caf",
    baseUrl:"http://content.guardianapis.com/",
    categoryUrl:"tags?type=keyword",
    newsUrl:"search",
    sourceUrl:"tags?type=series",
    authorUrl:"tags?type=contributor"
}

export default {
    NewsAPI,CredAPI,GuardianAPI
}