import React, {Component} from 'react';
import EditorBox from './EditorBox';
import PreviewBox from './PreviewBox';
import commonmark from 'commonmark';
import '../style/css/MarkdownPreviewer.css'

class MarkdowPreviewer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            originText: '',
            renderText: '',
            renderHTML: true,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleRead = this.handleRead.bind(this);
        this.handleRender = this.handleRender.bind(this);
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
            renderHTML: this.state.renderHTML,
        });
    }

    handleRender = () => {
        console.log(this.state);
        this.setState({
            originText: this.state.originText,
            renderText: this.state.renderText,
            renderHTML: !this.state.renderHTML,
        })
    }

    render() {
        
        return(
            <div className="d-flex flex-column align-items-center p-5 min-vh-100 markdownPreviewer-container">
                <h1 className="mb-5">Markdown <span className="text-light">Previewer</span></h1>
                <EditorBox handleChange={this.handleChange} originText={this.state.originText}/>
                <PreviewBox handleRender={this.handleRender} renderHTML={this.state.renderHTML} renderText={this.state.renderText}/>
            </div>
        )
    }
}

export default MarkdowPreviewer;