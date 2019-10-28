import React, {Component} from 'react';
import SentenceBox from './SentenceBox';
import '../style/css/QuoteMachine.css';

class QuoteMachine extends Component {
    render() {
        return (
            <div id="quote-box" className="quoteMachine d-flex flex-column w-100 p-4">
                <SentenceBox/>
            </div>
        );
    };
};

export default QuoteMachine;