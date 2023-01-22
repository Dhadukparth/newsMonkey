import React, { Component } from 'react'
import NavBar from './components/NavBar'
import News from './components/News'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

export default class App extends Component {

  pageSize = 6
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key="general" pageSize={this.pageSize} Country='in' Category='general' />}></Route>
            <Route exact path="/business" element={<News key="business" pageSize={this.pageSize} Country='in' Category='business' />}></Route>
            <Route exact path="/entertainment" element={<News key="entertainment" pageSize={this.pageSize} Country='in' Category='entertainment' />}></Route>
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} Country='in' Category='general' />}></Route>
            <Route exact path="/health" element={<News key="health" pageSize={this.pageSize} Country='in' Category='health' />}></Route>
            <Route exact path="/science" element={<News key="science" pageSize={this.pageSize} Country='in' Category='science' />}></Route>
            <Route exact path="/sports" element={<News key="sports" pageSize={this.pageSize} Country='in' Category='sports' />}></Route>
            <Route exact path="/technology" element={<News key="technology" pageSize={this.pageSize} Country='in' Category='technology' />}></Route>
          </Routes>
        </Router>
      </div>

    )
  }
}
