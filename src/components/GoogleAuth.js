import React from 'react';

class GoogleAuth extends React.Component{
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({ 
        clientId: '230762354455-6n0sp8gv1ed3nac6c5e22m1o426g3fsp.apps.googleusercontent.com',
        scope: 'email'
      });
    });
  }
  
  render() {
    return <div>GoogleAuth</div>
  }
}

export default GoogleAuth;