import React, {Component, Fragment} from 'react';
import '../style/css/SentenceBox.css';
import {getQuote} from "../utils/api";
import ShareBox from './ShareBox';

class SentenceBox extends Component {
    state = {
        quoteSentence: "",
        quoteAuthor: "",
        quoteImg: "",
        quoteDirection: "",
    };

    randomQuote = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    randomizeQuote = () => {
        getQuote().then((res) => {
            let index = this.randomQuote(0, res.length - 1);
            this.setState({
                quoteSentence: res[index].quote,
                quoteAuthor: res[index].character,
                quoteImg: res[index].image,
                quoteDirection: res[index].characterDirection,
            })
        });
    };

    componentDidMount() {
        this.randomizeQuote();
    };

    handleClick = () => {
        this.randomizeQuote();
    };

    render() {
        return(
            <Fragment>
                <p id="text" className={this.state.quoteDirection === "Left" ? "sentenceBox mb-4 alert alert-light rightArrow" : "sentenceBox mb-4 alert alert-light leftArrow"}>{this.state.quoteSentence}</p>
                <div className="imgBox mb-4">
                    <img src={this.state.quoteImg}/>
                </div>
                <p id="author" className="authorBox align-self-end mb-4">{this.state.quoteAuthor}</p>
                <div className="d-flex justify-content-between align-items-center">
                    <button id="new-quote" className="nextBtn btn btn-info" onClick={this.handleClick}>New sentence</button>
                    <div>
                        <ShareBox tweet={this.state.quoteSentence} tweetAuthor={this.state.quoteAuthor}/>
                    </div>
                </div>
                
            </Fragment>
        );
    };
};

export default SentenceBox;