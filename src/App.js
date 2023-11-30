import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar'
import NewsComponent from "./components/NewsComponent";
import Spinner from "./components/Spinner";


export default class App extends Component {
  constructor(){
    super()
    this.state = {
      articles : [
        {
          "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
          },
          "author": "Holman W. Jenkins",
          "title": "How Elon Became an ‘Antisemite’",
          "description": "‘Tristram Shandy’ is the press’s handbook for whipping words to obey a narrative.",
          "url": "https://www.wsj.com/articles/how-elon-musk-became-an-antisemite-media-bias-twitter-x-765707c8",
          "urlToImage": "https://images.wsj.net/im-892667/social",
          "publishedAt": "2023-11-29T03:12:59Z",
          "content": "Holman W. Jenkins Jr. is a member of the editorial board of The Wall Street Journal. He writes the twice-weekly Business World column that appears on the paper's op-ed page on Wednesdays and Saturday… [+646 chars]"
          },
          {
          "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
          },
          "author": "Ben Glickman",
          "title": "FDA Warns on Safety Issue With Philips CPAP Devices",
          "description": "Agency noted a ‘sharp increase’ in reports of issues with the machines",
          "url": "https://www.wsj.com/health/healthcare/fda-warns-on-safety-issue-with-philips-cpap-devices-c1678c2b",
          "urlToImage": "https://images.wsj.net/im-892911/social",
          "publishedAt": "2023-11-28T23:41:14Z",
          "content": "The U.S. Food and Drug Administration warned of an emerging safety issue involving a continuous positive airway pressure, or CPAP, machine made by Philips.\r\nThe FDA issued a safety communication abou… [+264 chars]"
          },
          {
          "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
          },
          "author": "AnnaMaria Andriotis",
          "title": "Apple Pulls Plug on Goldman Credit-Card Partnership",
          "description": "Tech giant proposed exiting contract in about 12-to-15 months",
          "url": "https://www.wsj.com/finance/banking/apple-pulls-plug-on-goldman-credit-card-partnership-ca1dfb45",
          "urlToImage": "https://images.wsj.net/im-892621/social",
          "publishedAt": "2023-11-28T22:56:59Z",
          "content": "Apple is pulling the plug on its credit-card partnership with Goldman Sachs, the final nail in the coffin of the Wall Street banks bid to expand into consumer lending.  \r\nThe tech giant recently sent… [+387 chars]"
          },
          {
          "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
          },
          "author": "Jason Zweig",
          "title": "The Secrets to Legendary Investor Charlie Munger's Success",
          "description": "Berkshire Hathaway vice chairman was known for his straightforward advice to business leaders at a ‘Friday lunch club’",
          "url": "https://www.wsj.com/finance/investing/charlie-munger-investor-secrets-to-success-41953a7a",
          "urlToImage": "https://images.wsj.net/im-892876/social",
          "publishedAt": "2023-11-28T22:08:00Z",
          "content": "Business and financial leaders made frequent pilgrimages to Los Angeles to hear Charlie Mungers thoughts as he held court while peering through thick eyeglasses over high, rosy cheekbones.\r\nAmong the… [+541 chars]"
          },
          {
          "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
          },
          "author": "wsj",
          "title": "Bookstores Shun RFK Jr.'s Upcoming Book...",
          "description": "‘People are weary of doomsayer books,’ bookseller says of ‘The Wuhan Cover-Up’",
          "url": "https://www.wsj.com/business/media/small-bookstores-shun-robert-f-kennedy-jr-s-upcoming-book-c59ef6e1",
          "urlToImage": "https://images.wsj.net/im-891544/social",
          "publishedAt": "2023-11-28T20:00:03Z",
          "content": "Small Bookstores Shun Robert F. Kennedy Jr.’s Upcoming BookBy and Nov. 28, 2023 10:00 am ET\r\nIndependent presidential candidate Robert F. Kennedy Jr. is a member of the most famous political family i… [+875 chars]"
          },
          {
          "source": {
          "id": "the-wall-street-journal",
          "name": "The Wall Street Journal"
          },
          "author": "Chavie Lieber",
          "title": "The Wing’s Co-Working Aesthetic Has Moved to the Suburbs",
          "description": "Laetitia Gorra helped design the Wing, which defined an aesthetic for upwardly mobile women in the 2010s. Now she’s created a new, homier, co-working space",
          "url": "https://www.wsj.com/style/design/the-wing-laetitia-gorra-coworking-space-suburbs-621c8bf7",
          "urlToImage": "https://images.wsj.net/im-892201/social",
          "publishedAt": "2023-11-28T18:38:19Z",
          "content": "In the 2010s, Laetitia Gorra helped define an aesthetic for working women in cities across the U.S. At \r\nthe womens-only co-working space the Wing, the interior designer developed corporate-chic inte… [+469 chars]"
          },
          {
            "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
            },
            "author": "Justin Lahart",
            "title": "The Price Is Wrong for Housing",
            "description": "Even if mortgage rates come down, today’s high home prices don’t seem sustainable.",
            "url": "https://www.wsj.com/economy/housing/the-price-is-wrong-for-housing-dff9d8bc",
            "urlToImage": "https://images.wsj.net/im-892291/social",
            "publishedAt": "2023-11-28T15:34:00Z",
            "content": "Lower rates would make U.S. houses more affordable, just not affordable enough.\r\nThe pandemic set off a flurry of demand for housing. Americans newfound desire for space, the padding of U.S. househol… [+356 chars]"
            },
            {
            "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
            },
            "author": "Joe Wallace",
            "title": "Why Gold Prices Are Rising",
            "description": "Zscaler drops on results; Carlyle surges after index inclusion",
            "url": "https://www.wsj.com/livecoverage/stock-market-today-dow-jones-11-28-2023",
            "urlToImage": "https://images.wsj.net/im-892549/social",
            "publishedAt": "2023-11-28T12:33:54Z",
            "content": "Gold prices are back at near-record highs. Why?\r\nFutures for the precious metal have shot up 8% so far this quarter, with gold now fetching comfortably more than $2,000 a troy ounce.\r\nGold pays no in… [+174 chars]"
            },
            {
            "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
            },
            "author": "Ray A. Smith",
            "title": "Fewer Black Workers Get Promoted as Diversity Push Ebbs",
            "description": "A push to elevate Black men and women into management roles is losing ground in big companies",
            "url": "https://www.wsj.com/business/fewer-black-professionals-are-getting-promoted-into-management-reversing-trend-e2e002d5",
            "urlToImage": "https://images.wsj.net/im-892144/social",
            "publishedAt": "2023-11-28T12:26:20Z",
            "content": "U.S. companies have lost momentum in \r\npromoting Black professionals into management, according to new data from McKinsey &amp; Co.After the May 2020 murder of George Floyd set off a national convers… [+441 chars]"
            },
            {
            "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
            },
            "author": "Elena Vardon",
            "title": "Rolls-Royce Lays Out Mid-Term Targets, Cost Savings",
            "description": "",
            "url": "https://www.wsj.com/business/energy-oil/rolls-royce-lays-out-mid-term-targets-cost-savings-9860dd28",
            "urlToImage": "https://images.wsj.net/im-892496/social",
            "publishedAt": "2023-11-28T08:02:00Z",
            "content": "Rolls-Royce Holdings said that it expects to deliver between 400 million and 500 million pounds ($505.1 million-$631.4 million) in cost savings in the mid-term, paving the way to restore capital retu… [+575 chars]"
            },
            {
            "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
            },
            "author": "Lingling Wei, Liza Lin",
            "title": "The Cost of Doing Business With China? A $40,000 Dinner With Xi Jinping Might Be Just the Start",
            "description": "Beijing’s green lights for Broadcom and Mastercard are seen as isolated successes tied to politics",
            "url": "https://www.wsj.com/world/china/the-cost-of-doing-business-with-china-a-40-000-dinner-with-xi-jinping-might-be-just-the-start-99c6dbda",
            "urlToImage": "https://images.wsj.net/im-891482/social",
            "publishedAt": "2023-11-28T04:00:00Z",
            "content": "Broadcom Chief Executive Hock Tan shelled out $40,000 to sit at Xi Jinpings table for the Chinese leaders recent dinner in San Francisco with the heads of American businesses. Tan had a lot more at s… [+599 chars]"
            },
            {
            "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
            },
            "author": "Corrie Driebusch",
            "title": "Fast-Fashion Giant Shein Files to Go Public",
            "description": "The China-founded company was valued at $66 billion earlier this year",
            "url": "https://www.wsj.com/business/fast-fashion-giant-shein-files-to-go-public-30a97410",
            "urlToImage": "https://images.wsj.net/im-892369/social",
            "publishedAt": "2023-11-27T21:58:21Z",
            "content": "Shein, the China-founded online fashion company that won over hundreds of millions of shoppers around the world, has confidentially filed to go public in the U.S. in what could be one of the biggest … [+286 chars]"
            },
            {
            "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
            },
            "author": "Isabella Simonetti",
            "title": "Fox News’s New Fight Club: The DeSantis vs. Newsom Debate",
            "description": "Event moderated by Sean Hannity on Thursday will feature two governors who aren’t rivals for office but have long sparred",
            "url": "https://www.wsj.com/business/media/fox-newss-new-fight-club-desantis-vs-newsom-debate-802369ff",
            "urlToImage": "https://images.wsj.net/im-891549/social",
            "publishedAt": "2023-11-27T19:27:38Z",
            "content": "They arent running against each other. Still, \r\nRon DeSantis and Gavin Newsom will take their fiery feud to Fox News this week in a debate moderated by Sean Hannity, offering up a head-to-head that s… [+413 chars]"
            },
            {
            "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
            },
            "author": "Mauro Orru",
            "title": "Amazon Clinches Deal With Spanish Union Over Cyber Monday Walkout",
            "description": "Amazon Clinches Deal With Spanish Union Over Cyber Monday Walkoutwsj.com",
            "url": "https://www.wsj.com/world/europe/amazon-clinches-deal-with-spanish-union-over-cyber-monday-walkout-a4f931e0",
            "urlToImage": "https://images.wsj.net/im-891384/social",
            "publishedAt": "2023-11-27T19:27:27Z",
            "content": "Amazon.com reached an agreement with most of its workers in Spain, averting the full impact of a strike that risked crippling its warehouses on one of the busiest days of the year.\r\nAn Amazon spokesp… [+504 chars]"
            },
            {
            "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
            },
            "author": "wsj",
            "title": "Musk Visits Amid Criticism Over Content on X...",
            "description": "Billionaire visits kibbutz attacked last month; is scheduled to meet with Israeli president",
            "url": "https://www.wsj.com/world/middle-east/elon-musk-visits-israel-amid-criticism-over-antisemitic-content-on-x-436e7d40",
            "urlToImage": "https://images.wsj.net/im-892024/social",
            "publishedAt": "2023-11-27T13:00:02Z",
            "content": "Elon Musk Visits Israel Amid Criticism Over Antisemitic Content on XBy Nov. 27, 2023 7:22 am ET\r\nElon Musk visited an Israeli community attacked by Hamas last month, and was scheduled to meet the cou… [+964 chars]"
            },
            {
            "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
            },
            "author": "wsj",
            "title": "Belichick on Verge of Becoming NFL's Biggest Loser...",
            "description": "The New England Patriots coach who has won six Super Bowls is closing in on a different record after his team lost again on Sunday",
            "url": "https://www.wsj.com/sports/football/bill-belichick-patriots-nfl-loss-record-9149f96d",
            "urlToImage": "https://images.wsj.net/im-891942/social",
            "publishedAt": "2023-11-27T13:00:02Z",
            "content": "Bill Belichick Is on the Verge of Becoming the NFL’s Biggest LoserBy Nov. 27, 2023 7:00 am ETWhen the New England Patriots routinely churned out double-digit win seasons, Bill Belichick’s march towar… [+1138 chars]"
            },
            {
            "source": {
            "id": "the-wall-street-journal",
            "name": "The Wall Street Journal"
            },
            "author": "wsj",
            "title": "Putin Has Staked Resources on Victory in Ukraine. Can West Match Him?",
            "description": "Kremlin leader seeks to turn advantage in manpower and munitions into battlefield progress, while Western will and assistance for Kyiv waver",
            "url": "https://www.wsj.com/world/putin-has-staked-russias-resources-on-victory-in-ukraine-can-the-west-match-him-b5d7b5f2",
            "urlToImage": "https://images.wsj.net/im-891635/social",
            "publishedAt": "2023-11-27T12:00:02Z",
            "content": "Putin Has Staked Russia’s Resources on Victory in Ukraine. Can the West Match Him?  KYIV, Ukraine—As Russia’s war against Ukraine approaches its third year, Moscow holds the advantage on the military… [+1107 chars]"
            },
            {
              "source": {
              "id": "the-wall-street-journal",
              "name": "The Wall Street Journal"
              },
              "author": "Rebecca Elliott",
              "title": "Behind Tesla’s Challenges in Making the Cybertruck: Ultrahard Stainless Steel",
              "description": "The metal used for the pickup truck’s distinctive exterior has been difficult to manipulate",
              "url": "https://www.wsj.com/business/autos/behind-teslas-challenges-in-making-the-cybertruck-ultrahard-stainless-steel-8cb4c1b9",
              "urlToImage": "https://images.wsj.net/im-890940/social",
              "publishedAt": "2023-11-27T11:09:14Z",
              "content": "With the Cybertruck, Tesla sought to break from convention by cladding its electric pickup in ultrahard stainless steel, a material that doesnt need to be painted, resists dents and adds to the vehic… [+256 chars]"
              },
              {
              "source": {
              "id": "the-wall-street-journal",
              "name": "The Wall Street Journal"
              },
              "author": "Noemie Bisserbe",
              "title": "Trial Opens for Beheading of French Teacher Samuel Paty",
              "description": "Trial examines whether students at the school where the attack took place helped the killer",
              "url": "https://www.wsj.com/world/europe/trial-opens-for-beheading-of-french-teacher-samuel-paty-35ab27e1",
              "urlToImage": "https://images.wsj.net/im-892011/social",
              "publishedAt": "2023-11-27T11:04:00Z",
              "content": "PARISSix teenagers went on trial Monday, accused of helping the man who beheaded French schoolteacher Samuel Paty three years ago after he showed \r\ncaricatures of the Prophet Muhammad as part of a cl… [+254 chars]"
              },
              {
              "source": {
              "id": "the-wall-street-journal",
              "name": "The Wall Street Journal"
              },
              "author": "Jeff Horwitz",
              "title": "Instagram’s Algorithm Delivers Toxic Video Mix to Adults Who Follow Children",
              "description": "Content served to WSJ test accounts included risqué footage of kids, overtly sexual adult videos and ads from major brands",
              "url": "https://www.wsj.com/tech/meta-instagram-video-algorithm-children-adult-sexual-content-72874155",
              "urlToImage": "https://images.wsj.net/im-888826/social",
              "publishedAt": "2023-11-27T10:43:49Z",
              "content": "Instagrams Reels video service is designed to show users streams of short videos on topics the system decides will interest them, such as sports, fashion or humor. \r\nThe Meta Platforms-owned social a… [+241 chars]"
              },
              {
              "source": {
              "id": "the-wall-street-journal",
              "name": "The Wall Street Journal"
              },
              "author": "Sam Kean",
              "title": "'Nuts and Bolts' Review: The Levers That Move the World",
              "description": "The making of machines has been a central part of the human story.",
              "url": "https://www.wsj.com/arts-culture/books/nuts-bolts-review-the-levers-that-move-the-world-f117a196",
              "urlToImage": "https://images.wsj.net/im-890915/social",
              "publishedAt": "2023-11-27T06:02:03Z",
              "content": "The philosopher of science Daniel Dennett once lamented that his peers didnt take engineering seriously enough. There are excellent philosophers of physics, philosophers of biology, philosophers of m… [+1230 chars]"
              }
      ],
      totalResults : 0,
      loading : true,
      page : 1,
      pageSize : 12,
      title : "",
      category : ["home", "business",
        "entertainment",
        "general",
        "health",
        "science",
        "sports",
        "technology"],
      updatedCategory : ""
    }
  }

  async componentDidMount(){
    this.setState({loading : true})
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&page=${this.state.page}&pageSize=${this.state.pageSize}&apiKey=d7bc5a69d44b4ecaafde41f8306406c3`)
    const data = await response.json();
    this.setState({articles : data.articles, totalResults : data.totalResults, loading: false})
  }

  updateNews = async() =>{
    this.setState({loading : true})
    const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.state.updatedCategory}&page=${this.state.page}&pageSize=${this.state.pageSize}&apiKey=d7bc5a69d44b4ecaafde41f8306406c3`)
    const data = await response.json();
    this.setState({articles : data.articles, totalResults : data.totalResults, title : this.state.updatedCategory, loading: false})
  }

  handleNextClick = async()=>{
    this.setState({page : this.state.page + 1}, this.updateNews)
  }

  handlePrevClick = async()=>{
    this.setState({page : this.state.page - 1,}, this.updateNews)
  }

  handleCategoryClick = async(category)=>{
    this.setState({ updatedCategory: category }, this.updateNews);
  }

  render() {
    return (
      <>
        <Router>
          <Navbar handleCategoryClick={this.handleCategoryClick} category={this.state.category}/>
          
        <div className="container">
          {this.state.loading?<Spinner /> : ""}
          <Routes> 
            <Route path="/OurNews" element={<NewsComponent articles={this.state.articles} page={this.state.page} loading={this.state.loading} handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick}/>} />
            <Route path="*" element={<NewsComponent articles={this.state.articles} page={this.state.page} title={this.state.title} loading={this.state.loading} totalResults={this.state.totalResults} handleNextClick={this.handleNextClick} handlePrevClick={this.handlePrevClick}/>}/>
          </Routes>
        </div>
        </Router>
      </>
    );
  }
}
