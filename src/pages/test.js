import React, { Fragment } from 'react';
import Layout from '../components/layout';

const Test = () => (
  <Fragment>
    <h1>Test</h1>
    <h3>You are now signed in</h3>
  </Fragment>
);

export default () => (
  <Layout>
    <div className="h-screen bg-red">
      <Test />
    </div>
  </Layout>
);
