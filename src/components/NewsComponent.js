import React, { Component } from 'react'
import NewsItem from './NewsItem'

export default class NewsComponent extends Component {
  render() {
    const {loading} = this.props;
    // console.log(this.props.articles)
    return (
      <div>
        
        {loading? "" : 
        <>
          <h1 className='m-4 text-center' style={{color:'whitesmoke'}}>Our News - Top Headlines</h1>
          <NewsItem articles={this.props.articles}/>
        </>}
        <div className='d-flex justify-content-between m-4'>
            {<button type="button" className="col-md-1 btn btn-outline-primary" disabled={this.props.page <=1} onClick={this.props.handlePrevClick}>Prev</button>}
            <button type="button" className="col-md-1 btn btn-outline-primary" onClick={this.props.handleNextClick}>Next</button>
        </div>
        
      </div>
    )
  }
}
