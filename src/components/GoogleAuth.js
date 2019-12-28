import React from 'react';

class GoogleAuth extends React.Component{
  state = { isSignedIn: null };
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({ 
        clientId: '230762354455-6n0sp8gv1ed3nac6c5e22m1o426g3fsp.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.setState({ isSignedIn: this.auth.isSignedIn.get() })
      });
    });
  }

  renderAuthButton() {
    if (this.state.isSignedIn === null) {
      return <div>I dont know</div>
    }else if (this.state.isSignedIn) {
      return <div>I am signed in</div>
    }else {
      return <div>I am not signed in</div>
    }
  }

  render() {
  return <div>{this.renderAuthButton()}</div>
  }
}

export default GoogleAuth;