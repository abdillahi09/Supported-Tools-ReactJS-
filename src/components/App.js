import React from 'react';
import UserInfo from './users';

class App extends React.Component {
    render(){
        return (
            <div>
                <h1>User Information</h1>
                <UserInfo/>
            </div>
        )
    }
}

export default App;