import React, {Component} from 'react';
import '../style/css/EditorBox.css'

class EditorBox extends Component {
    render() {
        return(
            <div className="w-100 px-5 editorBox-container">
                <h6 className="mt-2 ml-2">Editor</h6>
                <textarea
                    className="w-100 editorBox-item mb-4 px-2" 
                    type="text"
                    value={this.props.originText} 
                    onChange={this.props.handleChange}
                />
            </div>
        )
    }
}

export default EditorBox;