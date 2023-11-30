import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Navbar extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg sticky-top bg-secondary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link to="/OurNews" className="navbar-brand" href="/"><h2><i>OurNews</i></h2></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {this.props.category.map((item)=>{
              return <ul className="navbar-nav" key={item}>
                  <li className="nav-item">
                  <Link to={item} className="nav-link active" aria-current="page" href="/" onClick={()=>this.props.handleCategoryClick(item)}>{item}</Link>
                </li>
              </ul>
              })}
            {/* <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current="page" href="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/business" className="nav-link" href="/" onClick={this.props.handleCategoryClick}>business</Link>
              </li>
              <li className="nav-item">
                <Link to="/entertainment" className="nav-link" href="/" onClick={this.props.handleCategoryClick}>entertainment</Link>
              </li>
              <li className="nav-item">
                <Link to="/general" className="nav-link" href="/" onClick={this.props.handleCategoryClick}>general</Link>
              </li>
              <li className="nav-item">
                <Link to="/health" className="nav-link" href="/" onClick={this.props.handleCategoryClick}>health</Link>
              </li>
              <li className="nav-item">
                <Link to="/science" className="nav-link" href="/" onClick={this.props.handleCategoryClick}>science</Link>
              </li>
              <li className="nav-item">
                <Link to="/sports" className="nav-link" href="/" onClick={this.props.handleCategoryClick}>sports</Link>
              </li>
              <li className="nav-item">
                <Link to="/technology" className="nav-link" href="/" onClick={this.props.handleCategoryClick}>technology</Link>
              </li>
            </ul> */}
          </div>
        </div>
      </nav>
    )
  }
}
