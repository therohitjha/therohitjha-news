import React, { Component } from "react";
import SingleNews from "./SingleNews";

class News extends Component {
  state = {
    BBCNews: []
  }

  componentDidMount() {
    const url =`https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=e1e7e415da014b918f3dcf7287cf7d7a`
    
    fetch(url).then(res => res.json()).then(res2 => {
        this.setState({
          BBCNews: res2.articles
        })
     
      })
  }

  handleNews() {
    return this.state.BBCNews.map(item => (
      <SingleNews key={item.url} item={item} />
    ))
  }

  render() {
    return (
        <div className='row'>
            {this.handleNews()}
        </div>
    )
  }
}

export default News;
