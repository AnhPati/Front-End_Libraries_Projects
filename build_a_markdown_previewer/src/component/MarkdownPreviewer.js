import React, {Component} from 'react';
import EditorBox from './EditorBox';
import PreviewBox from './PreviewBox';

class MarkdowPreviewer extends Component {
    state = {
        placeholder: '',
    }
    render() {
        return(
            <div>
                MarkdowPreviewer
                <EditorBox/>
                <PreviewBox text={this.state.placeholder}/>
            </div>
        )
    }
}

export default MarkdowPreviewer;