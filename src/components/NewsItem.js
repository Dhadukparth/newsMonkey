import React, { Component } from 'react'

export default class NewsItem extends Component {
    render() {
        let {newsUrl, title, description, imageUrl, author, newsDate, source} = this.props;

        return (
            <div className='mt-3'>
                <div className="card">
                <span className="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{left: '50%', zIndex: '1'}}>{source}</span>
                    <img src={imageUrl?imageUrl:'https://live-production.wcms.abc-cdn.net.au/d718618805e29f723e0fa707421b0079?impolicy=wcms_crop_resize&cropH=2268&cropW=4032&xPos=0&yPos=0&width=862&height=485'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-muted">By {!author?'Unknown':author} on {new Date(newsDate).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-primary btn-sm">Read More</a>
                    </div>
                </div>
            </div>
        )
    }
}
