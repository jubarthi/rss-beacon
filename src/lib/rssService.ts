export interface NewsItem {
  title: string;
  description: string;
  link: string;
  source: string;
  pubDate: string;
}

const RSS_FEEDS = [
  {
    name: "BBC News",
    url: "https://feeds.bbci.co.uk/news/rss.xml",
    proxy: "https://api.rss2json.com/v1/api.json?rss_url=",
  },
  {
    name: "Agência Brasil",
    url: "https://agenciabrasil.ebc.com.br/rss/ultimasnoticias.xml",
    proxy: "https://api.rss2json.com/v1/api.json?rss_url=",
  },
];

const KEYWORDS = [
  "comunicado",
  "empresa",
  "release",
  "anúncio",
  "jornalismo",
  "imprensa",
  "mídia",
  "notícia",
  "informação",
  "divulgação",
];

const filterByKeywords = (text: string): boolean => {
  const lowerText = text.toLowerCase();
  return KEYWORDS.some((keyword) => lowerText.includes(keyword));
};

export const fetchNews = async (): Promise<NewsItem[]> => {
  const allNews: NewsItem[] = [];

  try {
    for (const feed of RSS_FEEDS) {
      try {
        const response = await fetch(`${feed.proxy}${encodeURIComponent(feed.url)}`);
        const data = await response.json();

        if (data.status === "ok" && data.items) {
          const filteredItems = data.items
            .filter((item: any) => 
              filterByKeywords(item.title) || filterByKeywords(item.description)
            )
            .slice(0, 10)
            .map((item: any) => ({
              title: item.title,
              description: item.description?.replace(/<[^>]*>/g, "") || "",
              link: item.link,
              source: feed.name,
              pubDate: new Date(item.pubDate).toLocaleDateString("pt-BR"),
            }));

          allNews.push(...filteredItems);
        }
      } catch (error) {
        console.error(`Error fetching ${feed.name}:`, error);
      }
    }

    // Sort by most recent
    allNews.sort((a, b) => {
      const dateA = new Date(a.pubDate.split("/").reverse().join("-"));
      const dateB = new Date(b.pubDate.split("/").reverse().join("-"));
      return dateB.getTime() - dateA.getTime();
    });

    return allNews.slice(0, 30);
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
};

export const getCachedNews = (): NewsItem[] | null => {
  try {
    const cached = localStorage.getItem("news-cache");
    const timestamp = localStorage.getItem("news-cache-timestamp");

    if (cached && timestamp) {
      const cacheAge = Date.now() - parseInt(timestamp);
      const TWELVE_HOURS = 12 * 60 * 60 * 1000;

      if (cacheAge < TWELVE_HOURS) {
        return JSON.parse(cached);
      }
    }
  } catch (error) {
    console.error("Error reading cache:", error);
  }
  return null;
};

export const setCachedNews = (news: NewsItem[]): void => {
  try {
    localStorage.setItem("news-cache", JSON.stringify(news));
    localStorage.setItem("news-cache-timestamp", Date.now().toString());
  } catch (error) {
    console.error("Error setting cache:", error);
  }
};
