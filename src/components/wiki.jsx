import React from 'react';

export default class Wiki extends React.Component {
    render() {
        return(
            <div className="wrapper">
                <input type="text" placeholder="Search for something!"/>
                    <ul>
                        <li>Result 1</li>
                        <li>Result 2</li>
                        <li>Result 3</li>
                        <li>...</li>
                    </ul>
            </div>
        );
    }
}
