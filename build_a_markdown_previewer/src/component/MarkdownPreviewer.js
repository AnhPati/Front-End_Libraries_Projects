import React, {Component} from 'react';
import EditorBox from './EditorBox';
import PreviewBox from './PreviewBox';
import commonmark from 'commonmark';

class MarkdowPreviewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originText: '**prout**',
            renderText: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleRead = this.handleRead.bind(this);
    }
    
    handleChange = (event) => {
        this.handleRead(event.target.value);
    }

    handleRead = (originText) => {
        let read = new commonmark.Parser();
        let write = new commonmark.HtmlRenderer();
        let parsed = read.parse(originText);
        let htmlText = write.render(parsed);
        console.log(htmlText);
        this.setState ({
            originText: originText,
            renderText: htmlText,
        });
    }

    render() {
        
        return(
            <div>
                MarkdowPreviewer
                <EditorBox handleChange={this.handleChange} originText={this.state.originText}/>
                <PreviewBox renderText={this.state.renderText}/>
            </div>
        )
    }
}

export default MarkdowPreviewer;