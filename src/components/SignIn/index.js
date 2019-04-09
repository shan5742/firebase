import React, { Component } from 'react';
import { navigate } from 'gatsby';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from 'react-accessible-accordion';

import { IoIosArrowDown } from 'react-icons/io';

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS =
  'auth/account-exists-with-different-credential';

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = event => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        navigate(ROUTES.TEST);
      })
      .catch(error => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === '' || email === '';

    return (
      <Accordion
        allowZeroExpanded="true"
        allowMultipleExpanded="true"
      >
        <div className="border-b border-black">
          <AccordionItem className="pb-2">
            <AccordionItemHeading>
              <AccordionItemButton className="outline-none">
                <div className="flex flex-row justify-between px-6">
                  <h1 class="mb-8 text-3xl font-medium text-center">
                    Sign In
                  </h1>
                  <IoIosArrowDown />
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel className="px-8">
              <form onSubmit={this.onSubmit}>
                <input
                  type="text"
                  value={email}
                  onChange={this.onChange}
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="email"
                  placeholder="Email Address"
                />
                <input
                  type="password"
                  className="block border border-grey-light w-full p-3 rounded mb-4"
                  name="password"
                  value={password}
                  placeholder="Password"
                  onChange={this.onChange}
                />
                <button
                  type="submit"
                  disabled={isInvalid}
                  className="w-full text-center py-3 rounded bg-green text-white hover:bg-green-dark focus:outline-none my-1"
                >
                  Sign In
                </button>

                {error && <p>{error.message}</p>}
              </form>
            </AccordionItemPanel>
          </AccordionItem>
        </div>
      </Accordion>
    );
  }
}

const SignInForm = withFirebase(SignInFormBase);

export default SignInForm;
