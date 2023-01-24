import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) =>  {

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const UpdateNews = async () => {
        props.setProgress(10);
        const url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.Category}&apiKey=${props.apiKey}&page=${page}&pagesize=${props.pageSize}`;
        setLoading(true)
        let data = await fetch(url);
        props.setProgress(30);
        let parsedata = await data.json()
        props.setProgress(70);
        setArticles(parsedata.articles)
        setTotalResults(parsedata.totalResults)
        setLoading(false)
        props.setProgress(100);
    }

    useEffect(() => {
        document.title = `${capitalizeFirstLetter(props.Category)} - NewsMonkey`;
        UpdateNews()
    }, [])

    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&category=${props.Category}&apiKey=38dead3a373c43ad8874ccfa225d848a&page=${page+1}&pagesize=${props.pageSize}`;
        setPage(page + 1)
        let data = await fetch(url);
        let parsedata = await data.json()
        setArticles(articles.concat(parsedata.articles))
        setTotalResults(parsedata.totalResults)
    };

    return (
        <div className='container my-5'>
            <h1 className='text-center' style={{marginTop: '90px'}}>NewsMokey - Top {capitalizeFirstLetter(props.Category)} Headlines</h1>
            {loading && <Spinner />}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
            >
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4 my-2" key={element.url}>
                            <NewsItem newsUrl={element.url} author={element.author} newsDate={element.publishedAt} imageUrl={element.urlToImage} title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 50) : ""} source={element.source.name} />
                        </div>
                    })}
                </div>
            </InfiniteScroll>
        </div>
    )
}


News.defaultProps = {
    Country: 'in',
    pageSize: 6,
}

News.propTypes = {
    Country: PropTypes.string,
    pageSize: PropTypes.number,
    Category: PropTypes.string,
}

export default News