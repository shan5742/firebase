import React, { Component, Fragment } from 'react';

import getFirebase, { FirebaseContext } from './Firebase';
import withAuthentication from './Session/withAuthentication';

class Layout extends Component {
  state = {
    firebase: null,
  };

  componentDidMount() {
    const app = import('firebase/app');
    const auth = import('firebase/auth');
    const database = import('firebase/database');
    const firestore = import('firebase/firestore');

    Promise.all([app, auth, database, firestore]).then(values => {
      const firebase = getFirebase(values[0]);

      this.setState({ firebase });
    });
  }

  render() {
    return (
      <FirebaseContext.Provider value={this.state.firebase}>
        <AppWithAuthentication {...this.props} />
      </FirebaseContext.Provider>
    );
  }
}

const AppWithAuthentication = withAuthentication(({ children }) => (
  <Fragment>{children}</Fragment>
));

export default Layout;
