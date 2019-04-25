import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

class SubmitForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rating: '',
      preference: [],
      nameListDropdown: [],
      nameListDropdown2: [],
      scores: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const responseSubmission = this.props.firebase.responseCollection();
    const submission = {
      name: this.state.name,
      rating: this.state.rating,
      preference: this.state.preference,
      respondant: this.props.firebase.auth.currentUser.email,
      timestamp: this.props.firebase.serverValue.TIMESTAMP,
    };
    responseSubmission.push(submission);
    this.setState({
      name: '',
      rating: '',
      preference: '',
    });
  }

  componentDidMount() {
    const _this = this;

    const getScores = this.props.firebase
      .getScores()
      .orderBy('score');
    getScores.get().then(function(querySnapshot) {
      let scores = [];
      querySnapshot.forEach(function(doc) {
        scores.push(doc.data());
      });
      _this.setState({
        scores: scores,
      });
    });

    const fetchNameList = this.props.firebase
      .grabNameList()
      .orderBy('name');
    fetchNameList.get().then(function(querySnapshot) {
      let nameListDropdown = [];
      querySnapshot.forEach(function(doc) {
        nameListDropdown.push(doc.data());
      });
      _this.setState({
        nameListDropdown: nameListDropdown,
      });
    });

    const fetchNameList2 = this.props.firebase
      .grabNameList2()
      .orderBy('name');
    fetchNameList2.get().then(function(querySnapshot) {
      let nameListDropdown2 = [];
      querySnapshot.forEach(function(doc) {
        nameListDropdown2.push(doc.data());
      });
      _this.setState({
        nameListDropdown2: nameListDropdown2,
      });
    });
  }

  render() {
    console.log(this.props);
    return (
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
              {this.state.nameListDropdown.map(n => {
                return <option value={n.name}>{n.name}</option>;
              })}
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
              {this.state.scores.map(s => {
                return <option value={s.score}>{s.score}</option>;
              })}
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
              {this.state.nameListDropdown2.map(n => {
                return <option value={n.name}>{n.name}</option>;
              })}
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
          class="bg-blue-dark hover:bg-blue-darker text-white text-xl font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
          type="submit"
        >
          Submit
        </button>
      </form>
    );
  }
}

export default withFirebase(SubmitForm);
