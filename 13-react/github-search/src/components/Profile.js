import React, { Component } from 'react';
import Github from '../github';

class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      repos: null
    }
  }

  componentDidMount() {
    const { username } = this.props.match.params;
    
    Github.getUserInfo(username).then(result => {
      this.setState({user: result.data});
    });

    Github.getUserRepos(username).then(result => {
      this.setState({repos: result.data});
    });
  }

  render() {
    return (
      <div>
        <h1>Profile for { this.props.match.params.username }</h1>
        <h2>User info coming soon</h2>
        <h2>Repositories coming soon</h2>
      </div>
    )
  }
}

export default Profile;
