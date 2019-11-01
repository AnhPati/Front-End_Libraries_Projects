import React, {Component} from 'react';
import '../style/css/PreviewBox.css';

class PreviewBox extends Component {
    render() {
        return(
            <div className="w-100 px-5 previewBox-container">
                <h6 className="mt-2 ml-2">Preview</h6>
                <p
                    className="w-100 previewBox-item mb-4 px-2"
                    dangerouslySetInnerHTML={{__html: this.props.renderText}}
                />
            </div>
        )
    }
}

export default PreviewBox;