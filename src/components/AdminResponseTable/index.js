import React, { Component } from 'react';
import { withFirebase } from '../Firebase';

class AdminResponses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responses: [],
    };
  }
  componentDidMount() {
    const myResponses = this.props.firebase.responseCollection();
    myResponses.on('value', snapshot => {
      let responses = snapshot.val();
      let newState = [];
      for (let response in responses) {
        newState.push({
          id: response,
          name: responses[response].name,
          rating: responses[response].rating,
          preference: responses[response].preference,
          respondant: responses[response].respondant,
          timestamp: responses[response].timestamp,
        });
      }
      this.setState({
        responses: newState,
      });
    });
  }
  render() {
    return (
      <div className="flex flex-wrap overflow-hidden">
        <table
          className="text-left mt-4 table-auto"
          style={{ borderCollapse: 'collapse' }}
        >
          <thead>
            <tr>
              <th className="py-4 md:px-6 sm:px-0 bg-blue-darker font-sans font-medium uppercase md:text-base sm:text-sm xs:text:xs  text-white border-b border-grey-light text-center w-1/5 overflow-hidden">
                Name
              </th>
              <th className="py-4 md:px-6 sm:px-0 bg-blue-darker font-sans font-medium uppercase md:text-base sm:text-sm xs:text:xs  text-white border-b border-grey-light text-center w-1/5 overflow-hidden">
                Rating
              </th>
              <th className="py-4 md:px-6 sm:px-0 bg-blue-darker font-sans font-medium uppercase md:text-base sm:text-sm xs:text:xs  text-white border-b border-grey-light text-center w-1/5 overflow-hidden">
                Preference
              </th>
              <th className="py-4 md:px-6 sm:px-0 bg-blue-darker font-sans font-medium uppercase md:text-base sm:text-sm xs:text:xs  text-white border-b border-grey-light text-center w-1/5 overflow-hidden">
                Respondant
              </th>
              <th className="py-4 md:px-6 sm:px-0 bg-blue-darker font-sans font-medium uppercase md:text-base sm:text-sm xs:text:xs  text-white border-b border-grey-light text-center w-1/5 overflow-hidden ">
                Date Submitted
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.responses.map(response => {
              return (
                <tr className="hover:bg-blue-lightest">
                  <td className="py-4 md:px-6 sm:px-0 border-b border-grey-light bg-grey text-black md:text-base sm:text-sm xs:text:xs text-center w-1/5 overflow-hidden">
                    {response.name}
                  </td>
                  <td className="py-4 md:px-6 sm:px-0 border-b border-grey-light bg-grey text-grey-darkest md:text-base sm:text-sm xs:text:xs text-center w-1/5 overflow-hidden">
                    {response.rating}
                  </td>
                  <td className="py-4 md:px-6 sm:px-0 border-b border-grey-light bg-grey text-grey-darkest md:text-base sm:text-sm xs:text:xs text-center w-1/5 overflow-hidden">
                    {response.preference}
                  </td>
                  
                  <td className="py-4 md:px-6 sm:px-0 border-b border-grey-light bg-grey text-grey-darkest md:text-base sm:text-sm xs:text:xs text-center w-1/5 overflow-hidden">
                    {response.respondant}
                  </td>
                  <td className="py-4 md:px-6 sm:px-0 border-b border-grey-light bg-grey text-grey-darkest md:text-base sm:text-sm xs:text:xs text-center w-1/5 overflow-hidden ">
                    {new Date(response.timestamp).toLocaleString(
                      'en-GB',
                      {
                        timeZone: 'UTC',
                        hour12: false,
                        month: 'short',
                        year: 'numeric',
                        day: 'numeric',
                        hour: '2-digit',
                        minute: '2-digit',
                      },
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default withFirebase(AdminResponses);
