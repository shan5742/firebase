import React, { Component } from 'react';
import Navigation from '../components/Navigation/index';
import Layout from '../components/layout';

export default class myresponses extends Component {
  render() {
    return (
      <Layout>
        <Navigation />
        <div className="flex flex-col flex-1 max-w-xl mx-auto px-4 py-8 md:p-8 w-full h-screen w-screen items-center">
          <table
            className="text-left m-4"
            style={{ borderCollapse: 'collapse' }}
          >
            <thead>
              <tr>
                <th className="py-4 px-12 bg-grey font-sans font-medium uppercase text-md text-grey-darkest border-b border-grey-light">
                  Name
                </th>
                <th className="py-4 px-6 bg-grey font-sans font-medium uppercase text-sm text-grey-darkest border-b border-grey-light">
                  Rating
                </th>
                <th className="py-4 px-6 bg-grey font-sans font-medium uppercase text-sm text-grey-darkest border-b border-grey-light">
                  Preference
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="hover:bg-blue-lightest">
                <td className="py-4 px-6 border-b border-grey-light bg-grey-lighter text-grey-darkest ">
                  John
                </td>
                <td className="py-4 px-6 border-b border-grey-light bg-grey-lighter text-grey-darkest text-center">
                  3
                </td>
                <td className="py-4 px-6 border-b border-grey-light bg-grey-lighter text-grey-darkest text-center">
                  Sam
                </td>
              </tr>
              <tr className="hover:bg-blue-lightest">
                <td className="py-4 px-6 border-b border-grey-light bg-grey-lighter text-grey-darkest">
                  Jane
                </td>
                <td className="py-4 px-6 border-b border-grey-light bg-grey-lighter text-grey-darkest text-center">
                  5
                </td>
                <td className="py-4 px-6 border-b border-grey-light bg-grey-lighter text-grey-darkest text-center">
                  Sam
                </td>
              </tr>
              <tr className="hover:bg-blue-lightest">
                <td className="py-4 px-6 border-b border-grey-light bg-grey-lighter text-grey-darkest">
                  Sam
                </td>
                <td className="py-4 px-6 border-b border-grey-light bg-grey-lighter text-grey-darkest text-center">
                  4
                </td>
                <td className="py-4 px-6 border-b border-grey-light bg-grey-lighter text-grey-darkest text-center">
                  Jane
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </Layout>
    );
  }
}
