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
        console.log(typeof htmlText);
        this.setState ({
            originText: originText,
            renderText: htmlText,
        });
    }

    render() {
        
        return(
            <div>
                MarkdowPreviewer
                <input 
                    type="text"
                    value={this.state.originText} 
                    onChange={this.handleChange}
                />
                {/*<EditorBox handleChange={this.handleChange}/>*/}
                {/*<PreviewBox text={this.state.renderText}/>*/}
                <div dangerouslySetInnerHTML={{__html: this.state.renderText}}/>
            </div>
        )
    }
}

export default MarkdowPreviewer;