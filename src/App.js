import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  pageSize = 6
  // apiKey = process.env.REACT_NEWS_API_KEY
  apiKey = "38dead3a373c43ad8874ccfa225d848a"

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress})
  }


  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height = {3}
          />
          <Routes>
            <Route exact path="/" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} Country='in' Category='general' />}></Route>
            <Route exact path="/business" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="business" pageSize={this.pageSize} Country='in' Category='business' />}></Route>
            <Route exact path="/entertainment" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} Country='in' Category='entertainment' />}></Route>
            <Route exact path="/general" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="general" pageSize={this.pageSize} Country='in' Category='general' />}></Route>
            <Route exact path="/health" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="health" pageSize={this.pageSize} Country='in' Category='health' />}></Route>
            <Route exact path="/science" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="science" pageSize={this.pageSize} Country='in' Category='science' />}></Route>
            <Route exact path="/sports" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="sports" pageSize={this.pageSize} Country='in' Category='sports' />}></Route>
            <Route exact path="/technology" element={<News apiKey={this.apiKey} setProgress={this.setProgress} key="technology" pageSize={this.pageSize} Country='in' Category='technology' />}></Route>
          </Routes>
        </Router>
      </div>

    )
  }
}
