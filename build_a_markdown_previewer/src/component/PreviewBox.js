import React, {Component} from 'react';

class PreviewBox extends Component {
    render() {
        return(
            <div>
                Preview
                <div dangerouslySetInnerHTML={{__html: this.props.renderText}}/>
            </div>
        )
    }
}

export default PreviewBox;