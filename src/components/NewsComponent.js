import React, { Component } from "react";
import NewsItem from "./NewsItem";
import InfiniteScroll from "react-infinite-scroll-component";
import Spinner from "./Spinner";

export default class NewsComponent extends Component {
  capitalize(str) {
    return str ? str.charAt(0).toUpperCase() + str.slice(1) : "";
  }
  render() {
    const { newArticlesLength, title, totalResults, page, pageSize } = this.props;
    return (
      <>
        {/* {console.log(newArticlesLength +" "+ this.props.articles.length + " and "+ totalResults)} */}
        <h1 className="m-4 text-center" style={{ color: "whitesmoke" }}>
          Our News - Top {this.capitalize(title)} Headlines
        </h1>
        <InfiniteScroll
          dataLength={this.props.articles.length} //This is important field to render the next data
          next={this.props.fetchMoreData}
          hasMore={this.props.articles.length < this.props.totalResults}
          loader={<Spinner />}
          endMessage={""}
        >
          {/* {loading? "" :  */}
          <div className="container">
            <div className="row">
              <NewsItem articles={this.props.articles} />
            </div>
          </div>
          {/* } */}
          {/* <div className='d-flex justify-content-between m-4'>
            {<button type="button" className="col-md-1 btn btn-outline-primary" disabled={this.props.page <=1} onClick={this.props.handlePrevClick}>Prev</button>}
            <button type="button" className="col-md-1 btn btn-outline-primary" disabled={ page === Math.ceil(totalResults/12) } onClick={this.props.handleNextClick}>Next</button>
        </div> */}
        </InfiniteScroll>
      </>
    );
  }
}
