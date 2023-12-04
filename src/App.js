import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import NewsComponent from "./components/NewsComponent";
// import Spinner from "./components/Spinner";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {
          source: { id: null, name: "YouTube" },
          author: null,
          title:
            "Pneumonia outbreak in China: India issues advisory amid rising cases | WION Newspoint - WION",
          description:
            "According to research conducted by the Netherlands Institute for Health Services Research (NIVEL), located in Utrecht, about 25 miles south of Amsterdam, 80 ...",
          url: "https://www.youtube.com/watch?v=KvEI4iuYfzg",
          urlToImage: "https://i.ytimg.com/vi/KvEI4iuYfzg/maxresdefault.jpg",
          publishedAt: "2023-11-29T07:26:46Z",
          content: null,
        },
        {
          source: { id: null, name: "Livelaw.in" },
          author: "Padmakshi Sharma",
          title:
            "'Why Is Governor Sitting On Bills For Two Years?' : Supreme Court Criticises Kerala Governor Arif Mohammed Khan - Live Law - Indian Legal News",
          description:
            "The Supreme Court on Wednesday, (November 29) criticised the conduct of the Kerala Governor Arif Mohammed Khan in sitting over the bills passed by the Kerala State Legislative Assembly for two...",
          url: "https://www.livelaw.in/top-stories/kerala-governor-supreme-court-arif-mohammed-khan-pending-bills-243257",
          urlToImage:
            "https://www.livelaw.in/h-upload/2023/11/29/506757-arif-mohmmad-kerala-governor-and-sc.jpg",
          publishedAt: "2023-11-29T07:22:52Z",
          content:
            "The Supreme Court on Wednesday, (November 29) criticised the conduct of the Kerala Governor Arif Mohammed Khan in sitting over the bills passed by the Kerala State Legislative Assembly for two years.… [+4661 chars]",
        },
        {
          source: { id: null, name: "Moneycontrol" },
          author: null,
          title:
            "Bumper listing gains for IREDA IPO investors. Hold, book profit or buy more? - Moneycontrol",
          description: null,
          url: "https://www.moneycontrol.com/news/business/ipo/bumper-listing-gains-for-ireda-ipo-investors-hold-book-profit-or-buy-more-11826721.html",
          urlToImage: null,
          publishedAt: "2023-11-29T07:08:25Z",
          content:
            "Generative artificial intelligence (AI), climate tech and fintech sectors will be the key themes for founders and venture capitalists in the next year, Prashanth Prakash, one of Accels founding partn… [+2255 chars]",
        },
        {
          source: { id: null, name: "The Indian Express" },
          author: "Tech Desk",
          title:
            "Google Drive files missing? Here’s what you should not do - The Indian Express",
          description:
            "Google has acknowledged the issue where files on Google Drive are missing for users. If you cannot see your files on Google Drive, here's what you shouldn't do.",
          url: "https://indianexpress.com/article/technology/tech-news-technology/google-drive-files-missing-heres-what-you-should-not-do-9046780/",
          urlToImage:
            "https://images.indianexpress.com/2023/11/Google-Drive.jpg",
          publishedAt: "2023-11-29T07:01:27Z",
          content:
            "Google Drive is the go-to app for millions of people to store documents, images, videos and WhatsApp chat backups on the cloud. However, several users on the Google Support forum have been complainin… [+326 chars]",
        },
        {
          source: { id: null, name: "NDTV News" },
          author: null,
          title:
            "US Osprey Military Aircraft With 8 Crew Crashes Off Japan - NDTV",
          description:
            "A U.S. military Osprey aircraft crashed into the ocean near Japan's Yakushima island on Wednesday with eight people on board, Japan's coast guard said.",
          url: "https://www.ndtv.com/world-news/us-osprey-military-aircraft-with-8-crew-crashes-off-japan-4616586",
          urlToImage:
            "https://i.ndtvimg.com/i/2017-08/osprey-afp_650x400_61502121196.jpg",
          publishedAt: "2023-11-29T06:54:56Z",
          content:
            "A US military aircraft with eight people onboard crashed into the sea in western Japan on Wednesday with fishermen reporting three people had been found but that their condition was unknown.\r\nThe coa… [+1523 chars]",
        },
        {
          source: { id: "the-times-of-india", name: "The Times of India" },
          author: "TOI Sports Desk",
          title:
            "Even 14 runs per over gettable with a wet ball: Ruturaj Gaikwad comes out in support of Prasidh Krishna a - timesofindia.com",
          description:
            "Cricket News: The dew laden condition was the primary reason for Indian bowling attack's poor show in the third T20 International, where the home team failed to def",
          url: "https://timesofindia.indiatimes.com/sports/cricket/australia-in-india/even-14-runs-per-over-gettable-with-a-wet-ball-ruturaj-gaikwad-comes-out-in-support-of-prasidh-krishna-and-company/articleshow/105584397.cms",
          urlToImage:
            "https://static.toiimg.com/thumb/msid-105584590,width-1070,height-580,imgsize-50870,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          publishedAt: "2023-11-29T06:52:13Z",
          content: "Jaiswal, Kishan help India thrash Australia to go 2-0 up",
        },
        {
          source: { id: "the-times-of-india", name: "The Times of India" },
          author: "TIMESOFINDIA.COM",
          title:
            "US to launch domestic work visa renewal programme in December, Indians to benefit most: Official - timesofindia.com",
          description:
            "US News: The United States will initiate a pilot program in December for the domestic renewal of certain categories of H-1B visas, benefiting Indian technology",
          url: "https://timesofindia.indiatimes.com/world/us/us-to-launch-domestic-work-visa-renewal-programme-in-december-indians-to-benefit-most-official/articleshow/105583286.cms",
          urlToImage:
            "https://static.toiimg.com/thumb/msid-105583204,width-1070,height-580,imgsize-113794,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
          publishedAt: "2023-11-29T06:28:58Z",
          content:
            "8 vegetarian dishes from Kashmiri Pandit cuisine that are a must-try",
        },
        {
          source: { id: null, name: "Hindustan Times" },
          author: "HT Sports Desk",
          title:
            "Nehra rejects India coaching offer; Rohit, Agarkar want Dravid to continue but.. - Hindustan Times",
          description:
            "BCCI has offered an extension to Rahul Dravid after Ashish Nehra declined to be India's T20I coach but there is no clarity on whether the former has accepted it | Cricket",
          url: "https://www.hindustantimes.com/cricket/nehra-rejects-india-coaching-offer-rohit-agarkar-want-dravids-contract-extended-chapell-fletcher-like-void-looming-101701238077128.html",
          urlToImage:
            "https://www.hindustantimes.com/ht-img/img/2023/11/29/1600x900/nehra_rohit-Dravid_1701238655398_1701238666531.jpg",
          publishedAt: "2023-11-29T06:26:17Z",
          content:
            "Who will be India's next head coach? Will Rahul Dravid continue? if he doesn't, will BCCI turn to his former teammate VVS Laxman? The questions are plenty. And at the moment there are no definite ans… [+3760 chars]",
        },
        {
          source: { id: "the-times-of-india", name: "The Times of India" },
          author: null,
          title:
            "'No one can save you': Salman Khan's security REVIEWED amid fresh threats from gangster Lawrence Bishnoi - Times of India",
          description:
            "In a concerning turn of events, Mumbai Police took swift action after an indirect threat aimed at Bollywood star Salman Khan surfaced on Facebook. The threat purportedly came from an account linked to incarcerated gangster Lawrence Bishnoi, known for his invo…",
          url: "https://timesofindia.indiatimes.com/videos/etimes/bollywood/no-one-can-save-you-salman-khans-security-reviewed-amid-fresh-threats-from-gangster-lawrence-bishnoi/videoshow/105582794.cms",
          urlToImage:
            "https://timesofindia.indiatimes.com/photo/msid-105582794,imgsize-51870.cms",
          publishedAt: "2023-11-29T06:02:37Z",
          content:
            "Nov 29, 2023, 11:32AM ISTSource: etimes.inIn a concerning turn of events, Mumbai Police took swift action after an indirect threat aimed at Bollywood star Salman Khan surfaced on Facebook. The threat… [+1298 chars]",
        },
        {
          source: { id: null, name: "Hindustan Times" },
          author: "HT Entertainment Desk",
          title:
            "Randeep Hooda reveals how he met his wife-to-be Lin Laishram - Hindustan Times",
          description:
            "Ahead of his wedding on Wednesday, Randeep opened up about his love story and how he’s excited to experience his bride’s traditions. | Bollywood",
          url: "https://www.hindustantimes.com/entertainment/bollywood/randeep-hooda-reveals-he-wants-lots-of-kids-ahead-of-wedding-with-lin-laishram-101701234559189.html",
          urlToImage:
            "https://www.hindustantimes.com/ht-img/img/2023/11/29/1600x900/Randeep_Hooda_1701234866548_1701234885231.jpg",
          publishedAt: "2023-11-29T05:54:27Z",
          content:
            "Randeep Hooda and Lin Laisharam are all set to tie the knot in Imphal, Manipal today. The couple was spotted visiting the relief camp at Moirang Lamkhai and Sendra Tourist Resort while there, accordi… [+2013 chars]",
        },
        {
          source: { id: null, name: "NDTV News" },
          author: null,
          title:
            "Indian Student Charged For Killing Family In US Triple Murder Case: Police - NDTV",
          description:
            "A 23-year-old Indian student has been arrested and charged for allegedly murdering his grandparents and uncle inside a New Jersey condominium, police and US media reports said.",
          url: "https://www.ndtv.com/indians-abroad/indian-student-charged-for-killing-family-in-us-triple-murder-case-police-4616355",
          urlToImage:
            "https://c.ndtvimg.com/2020-02/qepu6gms_police-car-generic_625x300_05_February_20.jpg",
          publishedAt: "2023-11-29T05:43:13Z",
          content:
            "After arriving, officers found 3 people - two men and a woman - with gunshot wounds. (Representational)\r\nNew York: A 23-year-old Indian student has been arrested and charged for allegedly murdering h… [+3240 chars]",
        },
        {
          source: { id: null, name: "Hindustan Times" },
          author: "HT Entertainment Desk",
          title:
            "Uttarakhand tunnel collapse: Akshay Kumar, Vir Das hail rescue of workers - Hindustan Times",
          description:
            "After 17 days, 41 trapped workers were rescued from the Uttarakhand tunnel. From Akshay Kumar to Abhishek Bachchan, many praised the rescue team. | Bollywood",
          url: "https://www.hindustantimes.com/entertainment/bollywood/uttarakhand-tunnel-collapse-akshay-kumar-vir-das-hail-rescue-of-workers-101701230948781.html",
          urlToImage:
            "https://www.hindustantimes.com/ht-img/img/2023/11/29/1600x900/akshay_1701236191452_1701236191845.jpg",
          publishedAt: "2023-11-29T05:38:10Z",
          content:
            "Bollywood celebrities are celebrating the successful rescue of 41 trapped workers from the Silkyara tunnel in Uttarakhand's Uttarkashi. The good news arrived after 17 days of intense hard work by the… [+2646 chars]",
        },
        {
          source: { id: null, name: "Abplive.com" },
          author: "ABP News Bureau",
          title:
            "ISRO's AstroSat Has Detected More Than 600 Gamma-Ray Bursts Since 2015: Report - ABP Live",
          description:
            "AstroSat made its 600th gamma-ray burst detection on November 22. AstroSat is the first Indian satellite fully dedicated to the study of astronomy.",
          url: "https://news.abplive.com/science/isro-astrosat-has-detected-more-than-600-gamma-ray-bursts-since-2015-1645919",
          urlToImage:
            "https://feeds.abplive.com/onecms/images/uploaded-images/2023/11/29/80d4c006f9a4ee9c7724e22f8bbaea671701232672629324_original.jpg?impolicy=abp_cdn&imwidth=1200&imheight=628",
          publishedAt: "2023-11-29T05:28:56Z",
          content: null,
        },
        {
          source: { id: null, name: "NDTV News" },
          author: null,
          title:
            "Can PM Modi Be India's Next Astronaut? What NASA Chief Said - NDTV",
          description:
            "Flying into space is a valuable experience for any politician, NASA chief Bill Nelson, who is also a senator, has told NDTV.",
          url: "https://www.ndtv.com/india-news/can-pm-modi-be-indias-next-astronaut-what-nasa-chief-said-4615761",
          urlToImage:
            "https://c.ndtvimg.com/2023-11/mfcldd2g_nasa-bill-nelson_625x300_29_November_23.png?im=FitAndFill,algorithm=dnn,width=1200,height=738?ver-20231128.06",
          publishedAt: "2023-11-29T05:19:00Z",
          content:
            "NDTV spoke to NASA chief Bill Nelson, also a senator\r\nNew Delhi: Flying into space is a valuable experience for any politician, NASA chief Bill Nelson, who is also a senator, has told NDTV. The US sp… [+2055 chars]",
        },
        {
          source: { id: null, name: "Livemint" },
          author: "Livemint",
          title:
            "Garena Free Fire Max redeem codes for Nov 29, 2023: Grab free rewards and exciting gifts | Mint - Mint",
          description:
            "Garena Free Fire Max redeem codes can be used to win in-game items like weapons, diamonds, skins, and more. These codes are available for a limited time and for the first 500 users only.",
          url: "https://www.livemint.com/technology/garena-free-fire-max-redeem-codes-for-nov-29-2023-grab-free-rewards-and-exciting-gifts-11701233721800.html",
          urlToImage:
            "https://www.livemint.com/lm-img/img/2023/11/29/1600x900/gg_1668573752178_1701233943677.png",
          publishedAt: "2023-11-29T05:00:07Z",
          content:
            "Garena Free Fire Max redeem codes can be used to win in-game items like weapons, diamonds, skins and more. These 12 digit alphanumeric codes consist of capital letters and numbers. For those unaware,… [+2097 chars]",
        },
        {
          source: { id: null, name: "Mysmartprice.com" },
          author: null,
          title:
            "Samsung Galaxy A05 With 50MP Dual Cameras, 5000mAh Battery Launched in India: Price, Specifications - MySmartPrice",
          description:
            "Samsung has officially launched the Galaxy A05 smartphone in India. It comes with 50MP dual cameras, 5000mAh battery, RAM Plus, and 2 years of OS upgrades.",
          url: "https://www.mysmartprice.com/gear/samsung-galaxy-a05-launched-india-price-specifications/",
          urlToImage:
            "https://assets.mspimages.in/gear/wp-content/uploads/2023/11/Samsung-Galaxy-A05-1.jpg",
          publishedAt: "2023-11-29T04:42:48Z",
          content: null,
        },
        {
          source: { id: "google-news", name: "Google News" },
          author: "Times of India",
          title:
            "80 passengers on Bharat Gaurav train fall ill due to food poisoning - Times of India",
          description: null,
          url: "https://news.google.com/rss/articles/CBMiiwFodHRwczovL3RpbWVzb2ZpbmRpYS5pbmRpYXRpbWVzLmNvbS9jaXR5L3B1bmUvODAtcGFzc2VuZ2Vycy1vbi1iaGFyYXQtZ2F1cmF2LXRyYWluLWZhbGwtaWxsLWR1ZS10by1mb29kLXBvaXNvbmluZy9hcnRpY2xlc2hvdy8xMDU1ODAwNDUuY21z0gGPAWh0dHBzOi8vdGltZXNvZmluZGlhLmluZGlhdGltZXMuY29tL2NpdHkvcHVuZS84MC1wYXNzZW5nZXJzLW9uLWJoYXJhdC1nYXVyYXYtdHJhaW4tZmFsbC1pbGwtZHVlLXRvLWZvb2QtcG9pc29uaW5nL2FtcF9hcnRpY2xlc2hvdy8xMDU1ODAwNDUuY21z?oc=5",
          urlToImage: null,
          publishedAt: "2023-11-29T04:38:00Z",
          content: null,
        },
        {
          source: { id: null, name: "The Siasat Daily" },
          author: "Indo-Asian News Service",
          title:
            "Hyderabad-based Bharat Biotech, Sydney Uni to advance vaccine research - The Siasat Daily",
          description:
            "Leading vaccine-maker Bharat Biotech and University of Sydney Infectious Diseases Institute announced a MoU to advance vaccine research",
          url: "https://www.siasat.com/hyderabad-based-bharat-biotech-sydney-uni-to-advance-vaccine-research-2922131/",
          urlToImage:
            "https://cdn.siasat.com/wp-content/uploads/2021/04/Bharat-Biotech.jpg",
          publishedAt: "2023-11-29T04:02:05Z",
          content:
            "Hyderabad: Leading vaccine-maker Bharat Biotech and the University of Sydney Infectious Diseases Institute (Sydney ID) on Tuesday announced a Memorandum of Understanding (MoU) to advance vaccine rese… [+1373 chars]",
        },
        {
          source: { id: null, name: "Hindustan Times" },
          author: "HT News Desk",
          title:
            "Cyclonic storm ‘Michaung’ likely to form over Bay of Bengal in next 48 hrs: IMD - Hindustan Times",
          description:
            "Cyclone Michaung: The low-pressure area, which formed over south Andaman Sea and adjoining Strait of Malacca, has now transformed into a well-marked LPA. | Latest News India",
          url: "https://www.hindustantimes.com/india-news/cyclonic-storm-michaung-over-bay-of-bengal-likely-in-next-48-hours-imd-101701227978409.html",
          urlToImage:
            "https://www.hindustantimes.com/ht-img/img/2023/11/29/1600x900/Chennai--High-waves-crash-at-the-sea-shore-ahead-o_1670948742609_1701229033217.jpg",
          publishedAt: "2023-11-29T03:49:36Z",
          content:
            "The low-pressure area over the Southeast Bay of Bengal and adjoining South Andaman Sea has now transformed into a well-marked low-pressure area, the India Meteorological Department (IMD) said on Wedn… [+3961 chars]",
        },
        {
          source: { id: null, name: "The Indian Express" },
          author: "The Indian Express",
          title:
            "‘I feel like touching Ranbir Kapoor’s feet after seeing him perform in Animal’: Sandeep Reddy Vanga - The Indian Express",
          description: null,
          url: "https://indianexpress.com/article/entertainment/bollywood/i-feel-like-touching-ranbir-kapoors-feet-after-seeing-him-perform-in-animal-sandeep-reddy-vanga-9046605/",
          urlToImage: null,
          publishedAt: "2023-11-29T03:42:35Z",
          content: null,
        },
      ],
      totalResults: 0,
      loading: true,
      page: 1,
      pageSize: 6,
      title: "",
      category: [
        "home",
        "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology",
      ],
      updatedCategory: "",
      newArticlesLength : 38
    };
    
  }

  async componentDidMount() {
    this.setState({ loading: true });
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page}&pageSize=${this.state.pageSize}&apiKey=d7bc5a69d44b4ecaafde41f8306406c3`
    );
    const data = await response.json();
    this.setState({
      articles: data.articles ? data.articles : this.state.articles,
      totalResults: data.totalResults,
      loading: false,
    });
  }

  updateNews = async () => {
    this.setState({ loading: true });
    // const response = await fetch(
    //   `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.updatedCategory}&page=${this.state.page}&pageSize=${this.state.pageSize}&apiKey=d7bc5a69d44b4ecaafde41f8306406c3`
    // );
    // const data = await response.json();
    // this.setState({
    //   articles: data.articles ? data.articles : this.state.articles,
    //   totalResults: data.totalResults?data.totalResults:38,
    //   title: this.state.updatedCategory,
    //   loading: false,
    // });
    // console.log(this.state.updatedCategory)
    const response = await fetch(
      `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.updatedCategory}&page=${this.state.page}&pageSize=${this.state.pageSize}&apiKey=d7bc5a69d44b4ecaafde41f8306406c3`
    );
    const data = await response.json();
    // const newArticlesLength = data.articles ? this.state.articles.length + data.articles.length : this.state.articles.length;
      const newArticlesLength = data.articles.length
    this.setState({
      articles: data.articles
        ? data.articles
        : this.state.articles,
      totalResults: data.totalResults ? data.totalResults : 38,
      loading: false,
      newArticlesLength: newArticlesLength,
    });
  };

  handleNextClick = async () => {
    this.setState({ page: this.state.page + 1 }, this.updateNews);
  };

  handlePrevClick = async () => {
    this.setState({ page: this.state.page - 1 }, this.updateNews);
  };

  handleCategoryClick = async (category) => {
    this.setState({ updatedCategory: category }, this.updateNews);
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 }, async () => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=in&category=${this.state.updatedCategory}&page=${this.state.page}&pageSize=${this.state.pageSize}&apiKey=d7bc5a69d44b4ecaafde41f8306406c3`
      );
      const data = await response.json();
      const newArticlesLength = data.articles ? this.state.articles.length + data.articles.length : this.state.articles.length;
      this.setState({
        articles: data.articles
          ? this.state.articles.concat(data.articles)
          : this.state.articles,
        totalResults: data.totalResults ? data.totalResults : 38,
        loading: false,
        newArticlesLength: newArticlesLength,
      });
    });
  };

  render() {
    return (
      <>
        <Router>
          <Navbar
            handleCategoryClick={this.handleCategoryClick}
            category={this.state.category}
          />

          <div className="container">
            {/* {this.state.loading ? <Spinner /> : ""} */}
            <Routes>
              <Route
                path="/OurNews"
                element={
                  <NewsComponent
                    articles={this.state.articles}
                    page={this.state.page}
                    loading={this.state.loading}
                    handleNextClick={this.handleNextClick}
                    handlePrevClick={this.handlePrevClick}
                    fetchMoreData = {this.fetchMoreData}
                    newArticlesLength = {this.state.newArticlesLength}
                    totalResults={this.state.totalResults}
                  />
                }
              />
              <Route
                path="*"
                element={
                  <NewsComponent
                    articles={this.state.articles}
                    pageSize={this.state.page}
                    page={this.state.page}
                    title={this.state.title}
                    loading={this.state.loading}
                    totalResults={this.state.totalResults}
                    handleNextClick={this.handleNextClick}
                    handlePrevClick={this.handlePrevClick}
                    fetchMoreData = {this.fetchMoreData}
                    newArticlesLength = {this.state.newArticlesLength}
                  />
                }
              />
            </Routes>
          </div>
        </Router>
      </>
    );
  }
}
