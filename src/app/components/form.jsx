import React from 'react';

import pagestate from '../stores/pagestate';

class BtForm extends React.Component {

    componentWillMount () {
        this.state = { artist: '' };
        this.handleInput = this.handleInput.bind(this);
        this.submitArtist = this.submitArtist.bind(this);
    }

    handleInput (e) {
        this.setState({ artist: e.target.value });
    }

    submitArtist () {
        const artist = this.state.artist.replace(' ', '+');
        pagestate.dispatch({ type: 'loading' });
        fetch('/rest/mashup/?artist=' + artist)
            .then((response) => response.json())
            .then((json) => {
                pagestate.dispatch({ type: json.score });
            });
    }

    render () {
        return (
            <div className="form-container">
                <h2>Enter an artist's name to see how 'big time' they are</h2>
                <input type="text" value={this.state.artist} onChange={this.handleInput}/>
                <button onClick={this.submitArtist}>Submit</button>
            </div>
        );
    }

}

export default BtForm;
