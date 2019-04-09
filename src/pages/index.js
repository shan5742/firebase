import React, { Fragment } from 'react';
import SignInForm from '../components/SignIn/index';
import SignUpForm from '../components/SignUp/index';
import Layout from '../components/layout';

const LandingPage = () => (
  <Fragment>
    <SignInForm />
    <SignUpForm />
  </Fragment>
);

export default () => (
  <Layout>
    <div class="container h-screen max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
      <div class="bg-white py-8 rounded shadow-md text-black w-full border border-bottom-black">
        <LandingPage />
      </div>
    </div>
  </Layout>
);
