import React from 'react';

import pagestate from '../stores/pagestate';

class Page extends React.Component {

    componentWillMount () {
        this.state = { result: 'hidden' };
        this.handleReduxEvent = this.handleReduxEvent.bind(this);
    }

    componentDidMount () {
        pagestate.subscribe(this.handleReduxEvent);
    }

    handleReduxEvent () {
        this.setState({ result: pagestate.getState() });
    }

    render () {
        let content;
        if (this.state.result === 'loading') {
            content = <img src="http://smartflow.autovitals.com/Images/processing.gif"/>
        } else if (this.state.result === 'hidden') {
            content = <span></span>
        } else if (this.state.result) {
            content = <h2>Artist score : {this.state.result}</h2>
        } else {
            content = <h2>This artist might as well not even exist. Not big time at all.</h2>
        }
        return (
            <div className="result-container">
                {content}
            </div>
        );
    }

}

export default Page;
