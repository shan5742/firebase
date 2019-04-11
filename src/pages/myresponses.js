import React, { Component } from 'react';
import Navigation from '../components/Navigation/index';
import Layout from '../components/layout';
import * as firebase from 'firebase';

export default class myresponses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: [],
    };
  }
  componentDidMount() {
    const myResponses = firebase.database().ref('response');
    myResponses.on('value', snapshot => {
      let responses = snapshot.val();
      let newState = [];
      for (let response in responses) {
        newState.push({
          id: response,
          name: responses[response].name,
          rating: responses[response].rating,
          preference: responses[response].preference,
        });
      }
      this.setState({
        responses: newState,
      });
    });
  }
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
              {this.state.responses.map(response => {
                return (
                  <tr className="hover:bg-blue-lightest">
                    <td className="py-4 px-6 border-b border-grey-light bg-grey-lighter text-grey-darkest ">
                      {response.name}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light bg-grey-lighter text-grey-darkest text-center">
                      {response.rating}
                    </td>
                    <td className="py-4 px-6 border-b border-grey-light bg-grey-lighter text-grey-darkest text-center">
                      {response.preference}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </Layout>
    );
  }
}
