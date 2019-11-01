import React, {Component} from 'react';
import '../style/css/EditorBox.css'

class EditorBox extends Component {
    render() {
        return(
            <div className="w-100 px-5 editorBox-container" id="editorBox-collapse">
                <a
                    className=""
                    role="button"
                    data-toggle="collapse"
                    href="#editorItem-collapse"
                    aria-expanded="false"
                    aria-controls="editorItem-collapse"
                >
                    <h6 className="mt-2 ml-2">Editor</h6>
                </a>
                <textarea
                    className="w-100 editorBox-item mb-4 px-2 collapse show"
                    id="editorItem-collapse"
                    type="text"
                    value={this.props.originText} 
                    onChange={this.props.handleChange}
                />
            </div>
        )
    }
}

export default EditorBox;