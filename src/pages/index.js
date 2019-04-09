import React, { Fragment } from 'react';
import SignInForm from '../components/SignIn/index';

const LandingPage = () => (
  <Fragment>
    <SignInForm />
  </Fragment>
);

export default () => (
  <div class="container h-screen max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
    <div class="bg-white py-8 rounded shadow-md text-black w-full border border-bottom-black">
      <LandingPage />
    </div>
  </div>
);
