import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';
import * as ROLES from '../../constants/roles';

const SignUpPage = () => (
  <div>
    <SignUpForm />
  </div>
);

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  isAdmin: false,
  error: null,
  disabled: true,
};

const ERROR_CODE_ACCOUNT_EXISTS = 'auth/email-already-in-use';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with this E-Mail address already exists.
  Try to login with this account instead. If you think the
  account is already used from one of the social logins, try
  to sign in with one of them. Afterward, associate your accounts
  on your personal account page.
`;

const ERROR_MSG_INELIGIBLE = `
  Unfortunaately you are not permitted to use our service. If you think this is a mistake please double check your details and try again.
`;

class SignUpFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    event.preventDefault();

    const { username, email, passwordOne, isAdmin } = this.state;

    const roles = {};

    if (isAdmin) {
      roles[ROLES.ADMIN] = ROLES.ADMIN;
    }

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
                    username,
                    email,
                    roles,
                  });
              })
              .then(() => {
                return this.props.firebase.doSendEmailVerification();
              })
              .then(() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.VERIFY_EMAIL);
              })
              .catch(error => {
                if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
                  error.message = ERROR_MSG_ACCOUNT_EXISTS;
                }
                this.setState({ error });
              });
          });
        } else {
          alert(ERROR_MSG_INELIGIBLE);
        }
      });
  };

  adminCheck() {
    const check = this.props.firebase.firestore.collection(
      'adminList',
    );
    check
      .where('email', '==', this.state.email)
      .get()
      .then(docsRef => {
        if (!docsRef.empty) {
          this.setState({
            disabled: false,
          });
        } else {
          this.setState({
            disabled: true,
          });
        }
      });
  }

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  onChangeCheckbox = event => {
    this.setState({ [event.target.name]: event.target.checked });
  };

  componentDidUpdate() {
    this.adminCheck();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      isAdmin,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (
      <form onSubmit={this.onSubmit}>
        <input
          className="block border border-grey-light w-full p-3 rounded mb-4"
          name="username"
          value={username}
          onChange={this.onChange}
          type="text"
          placeholder="Full Name"
        />
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
        <label>
          Admin:
          <input
            name="isAdmin"
            type="checkbox"
            disabled={this.state.disabled}
            checked={isAdmin}
            onChange={this.onChangeCheckbox}
          />
        </label>
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

const SignUpForm = compose(
  withRouter,
  withFirebase,
)(SignUpFormBase);

export default SignUpPage;

export { SignUpForm };
