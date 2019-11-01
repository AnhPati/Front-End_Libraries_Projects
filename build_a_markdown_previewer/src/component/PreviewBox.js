import React, {Component} from 'react';
import '../style/css/PreviewBox.css';

class PreviewBox extends Component {
    render() {
        return(
            <div className="w-100 px-5 previewBox-container" id="previewBox-collapse">
                <a
                    className=""
                    role="button"
                    data-toggle="collapse"
                    href="#previewItem-collapse"
                    aria-expanded="false"
                    aria-controls="previewItem-collapse"
                >
                    <h6 className="mt-2 ml-2">Preview</h6>
                </a>
                <p
                    className="w-100 previewBox-item mb-4 px-2 collapse show"
                    id="previewItem-collapse"
                    dangerouslySetInnerHTML={{__html: this.props.renderText}}
                />
            </div>
        )
    }
}

export default PreviewBox;