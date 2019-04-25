import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from '../Navigation';
import HomePage from '../Home';
import SignUpPage from '../SignUp';
import SignInPage from '../SignIn';

import SubmitResponsePage from '../SubmitResponsePage';
import ResponsesPage from '../ResponsesPage';
import AdminPage from '../AdminResponsePage';
import VerifyEmail from '../VerifyEmailPage';
import ResetPass from '../ResetPasswordPage';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
  <Router>
    <div>
      <Navigation />

      <hr />

      <Route exact path={ROUTES.HOME} component={HomePage} />
      <Route path={ROUTES.SIGN_UP} component={SignUpPage} />
      <Route path={ROUTES.SIGN_IN} component={SignInPage} />
      <Route path={ROUTES.VERIFY_EMAIL} component={VerifyEmail} />
      <Route path={ROUTES.RESET_PASS} component={ResetPass} />
      <Route
        path={ROUTES.SUBMIT_RESPONSE}
        component={SubmitResponsePage}
      />
      <Route path={ROUTES.RESPONSES} component={ResponsesPage} />
      <Route path={ROUTES.ADMIN} component={AdminPage} />
    </div>
  </Router>
);

export default withAuthentication(App);
