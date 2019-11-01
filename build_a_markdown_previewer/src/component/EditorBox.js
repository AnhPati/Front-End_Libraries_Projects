import React, {Component} from 'react';

class EditorBox extends Component {
    render() {
        return(
            <div>
                Editor
                <input 
                    type="text"
                    value={this.props.originText} 
                    onChange={this.props.handleChange}
                />
            </div>
        )
    }
}

export default EditorBox;