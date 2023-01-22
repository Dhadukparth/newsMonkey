import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {

    static defaultProps = {
        Country: 'in',
        pageSize: 6,
    }

    static propTypes = {
        Country: PropTypes.string,
        pageSize: PropTypes.number,
        Category: PropTypes.string,
    }

    capitalizeFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    constructor(props){
        super(props);
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
        document.title = `${this.capitalizeFirstLetter(this.props.Category)} - NewsMonkey`;
    }

    async UpdateNews(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.Country}&category=${this.props.Category}&apiKey=38dead3a373c43ad8874ccfa225d848a&page=${this.state.page}&pagesize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedata = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedata.articles,
            loading: false,
        })
    }

    async componentDidMount(){
        this.UpdateNews()
    }

    hendlePrevClick = async ()=>{
        this.setState({page: this.state.page - 1})
        this.UpdateNews();
    }
    
    hendleNextClick = async ()=>{
        if(!(this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
            this.setState({page: this.state.page - 1})
            this.UpdateNews();
        }
    }


    render() {
        return (
            <div className='container my-5'>
                <h1 className='text-center my-3'>NewsMokey - Top {this.capitalizeFirstLetter(this.props.Category)} Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element)=>{
                        return <div className="col-md-4 my-2" key={element.url}>
                            <NewsItem newsUrl={element.url} author={element.author} newsDate={element.publishedAt} imageUrl={element.urlToImage} title={element.title?element.title.slice(0, 40):""} description={element.description?element.description.slice(0, 50):""} source={element.source.name} />
                        </div>
                    })}
                </div>
                <div className="d-flex justify-content-between">
                    <button disabled={this.state.page<=1} className="btn btn-outline-primary" onClick={this.hendlePrevClick}>&larr; Previous</button>
                    <button disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-outline-primary" onClick={this.hendleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}
