import React, {Component} from 'react';
import '../style/css/ShareBox.css'

class ShareBox extends Component {
    render() {
        return(
            <div>
                <a id="tweet-quote" href={`https://twitter.com/intent/tweet?text="${this.props.tweet}" ${this.props.tweetAuthor}`} target='_blank'>
                    <i className="fab fa-twitter shareBtn"></i>
                </a>     
            </div>
        )
    }
}

export default ShareBox;