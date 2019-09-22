import React, { Component } from "react";
import News from './News'
class App extends Component {

    state={
        BBCNews:{
type:'top-headlines',
query:'sources=bbc-news'
        },
        Techcrunch:{

            type:'everything',
            query:'domains=techcrunch.com&language=en'
        }
    }
  render() {
    return (
      <div className=''>
      
  <nav>
    <div class="nav-wrapper">
      <a exact href="/" class="brand-logo">therohitjha News</a>
    </div>
  </nav>
        <News news={this.state.BBCNews}/>
        <h2 className="center-align card-panel red lighten-1 text-lighten-2">Tech News</h2>
        <News news={this.state.Techcrunch}/>
        <footer className='page-footer'>
        <div class="footer-copyright">
            <div class="container">
            © 2019 therohitjha
            <a class="grey-text text-lighten-4 right" href="https://github.com/therohitjha">More Projects</a>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
