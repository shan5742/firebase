import React, { Component } from 'react';
import Navigation from '../components/Navigation/index';
import Layout from '../components/layout';
import { FirebaseContext } from '../components/Firebase/context';
import * as firebase from 'firebase';

class SubmitResponse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rating: '',
      preference: '',
      score: [],
      loading: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.fetchScores();
  }

  // componentDidUpdate(prevProps, prevState) {
  //   console.log(prevState.score, this.state.score);
  //   if (
  //     prevState.score !== this.state.score ||    ) {
  //   }
  //   // ('value', snapshot => {
  //   //   let scores = snapshot.val();
  //   //   let newState = [];
  //   //   for (let score in scores) {
  //   //     newState.push({
  //   //       id: score,
  //   //       name: scores[score].score,
  //   //     });
  //   //   }
  //   //   this.setState({
  //   //     scores: newState,
  //   //   });
  //   // });
  // }

  fetchScores = () => {
    const score = firebase.firestore().collection('rating');

    score.get().then(({ docs }) => {
      this.setState(prevState => ({
        ...prevState,
        score: docs.map(doc => ({ id: doc.id, ...doc.data() })),
      }));
    });
  };

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const responseSubmission = firebase.database().ref('response');
    const submission = {
      name: this.state.name,
      rating: this.state.rating,
      preference: this.state.preference,
    };
    responseSubmission.push(submission);
    this.setState({
      name: '',
      rating: '',
      preference: '',
    });
  }

  render() {
    return (
      <FirebaseContext.Consumer>
        {firebase => (
          <Layout>
            <Navigation />
            <div className="flex flex-col flex-1 max-w-xl mx-auto px-4 py-8 md:p-8 w-full h-screen w-screen items-center">
              <h1 className="mt-16">Submit Response</h1>
              <h3>Please fill out the form below</h3>
              <form
                onSubmit={this.handleSubmit}
                className="w-full max-w-sm mt-16"
              >
                <div className="md:flex md:items-center mb-6 ">
                  <div className="md:w-1/3 mr-8">
                    <label className="block text-grey-dark font-bold md:text-right mb-1 md:mb-0 mr-8">
                      Name
                    </label>
                  </div>
                  <div class="relative">
                    <select
                      class="block appearance-none w-32 bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
                      id="grid-state"
                      name="name"
                      onChange={this.handleChange}
                      value={this.state.name}
                    >
                      <option value="John">John</option>
                      <option value="Sam">Sam</option>
                      <option value="Jane">Jane</option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6 ">
                  <div className="md:w-1/3 mr-8">
                    <label className="block text-grey-dark font-bold md:text-right mb-1 md:mb-0 mr-8">
                      Rating
                    </label>
                  </div>
                  <div class="relative">
                    <select
                      class="block appearance-none w-32 bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
                      id="grid-state"
                      name="rating"
                      onChange={this.handleChange}
                      value={this.state.rating}
                    >
                      {/* {this.state.scores.map(score => {
                      return <option value="0">{score.score}</option>;
                    })} */}

                      <option value="0">0</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="md:flex md:items-center mb-6 ">
                  <div className="md:w-1/3 mr-8">
                    <label className="block text-grey-dark font-bold md:text-right mb-1 md:mb-0 mr-8">
                      Preference
                    </label>
                  </div>
                  <div class="relative">
                    <select
                      class="block appearance-none w-32 bg-grey-lighter border border-grey-lighter text-grey-darker py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-grey"
                      id="grid-state"
                      name="preference"
                      onChange={this.handleChange}
                      value={this.state.preference}
                    >
                      <option value="Chris">Chris</option>
                      <option value="Rob">Rob</option>
                      <option value="Sue">Sue</option>
                    </select>
                    <div class="pointer-events-none absolute pin-y pin-r flex items-center px-2 text-grey-darker">
                      <svg
                        class="fill-current h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  class="bg-green hover:bg-green-dark text-white text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
                  type="submit"
                >
                  Submit
                </button>
              </form>
            </div>
          </Layout>
        )}
      </FirebaseContext.Consumer>
    );
  }
}
export default SubmitResponse;
