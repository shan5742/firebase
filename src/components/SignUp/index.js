import React, { Component } from 'react';
import { navigate } from 'gatsby';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const INITIAL_STATE = {
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();

    const { email, passwordOne } = this.state;

    this.props.firebase.firestore
      .collection('emailList')
      .where('email', '==', email)
      .get()
      .then(docsRef => {
        if (!docsRef.empty) {
          docsRef.docs.map(docRef => {
            this.props.firebase
              .doCreateUserWithEmailAndPassword(email, passwordOne)
              .then(authUser => {
                // Create a user in your Firebase realtime database
                return this.props.firebase
                  .user(authUser.user.uid)
                  .set({
                    email,
                  });
              })
              .then(() => {
                return this.props.firebase.doSendEmailVerification();
              })
              .then(() => {
                this.setState({ ...INITIAL_STATE });
                navigate(ROUTES.REDIRECT);
              })
              .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                  error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }
                this.setState({ error });
              });
          });
        } else {
          console.log('No Result');
        }
      });
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  render() {
    const { email, passwordOne, passwordTwo, error } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="email"
          value={email}
          onChange={this.onChange}
          type="text"
          placeholder="Email Address"
        />
        <input
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="passwordOne"
          value={passwordOne}
          onChange={this.onChange}
          type="password"
          placeholder="Password"
        />
        <input
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="passwordTwo"
          value={passwordTwo}
          onChange={this.onChange}
          type="password"
          placeholder="Confirm Password"
        />
        <button
          className="w-full text-center py-3 rounded text-white hover:bg-green-dark focus:outline-none my-1 bg-green"
          disabled={isInvalid}
          type="submit"
        >
          Sign Up
        </button>

        {error && <p>{error.message}</p>}
      </form>
    );
  }
}

export default withFirebase(SignUpFormBase);
