import React, {Component} from 'react';
import '../style/css/PreviewBox.css';

class PreviewBox extends Component {
    render() {
        return(
            <div className="w-100 px-5 previewBox-container" id="previewBox-collapse">
                <div className="d-flex justify-content-between">
                    <a
                        role="button"
                        data-toggle="collapse"
                        href="#previewItem-collapse"
                        aria-expanded="false"
                        aria-controls="previewItem-collapse"
                    >
                        <h6 className="mt-2 ml-2">Preview</h6>
                    </a>
                    <h6
                        className="mt-2 mr-2 renderHTML-btn"
                        onClick={this.props.handleRender}
                    >
                        {this.props.renderHTML ? "HTML view" : "Text view"}
                    </h6>
                </div>
                {this.props.renderHTML ? (
                    <p
                        className="w-100 previewBox-item mb-4 px-2 collapse show renderHTML-item"
                        id="previewItem-collapse"
                    >
                        {this.props.renderText.substring(3, this.props.renderText.length - 5)}
                    </p>
                ) : (
                    <p
                        className="w-100 previewBox-item mb-4 px-2 collapse show"
                        id="previewItem-collapse"
                        dangerouslySetInnerHTML={{__html: this.props.renderText}}
                    />
                )}
            </div>
        )
    }
}

export default PreviewBox;