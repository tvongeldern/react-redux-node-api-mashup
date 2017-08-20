import React from 'react';

import ArtistForm from './form.jsx';
import Result from './result.jsx';

class Page extends React.Component {

    render () {
        return (
            <div className="page-container">
                <ArtistForm/>
                <Result/>
            </div>
        );
    }

}

export default Page;
