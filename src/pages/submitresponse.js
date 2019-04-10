import React, { Component } from 'react';
import Navigation from '../components/Navigation/index';
import Layout from '../components/layout';

export default class SubmitResponse extends Component {
  render() {
    return (
      <Layout>
        <Navigation />
        <div className="flex flex-col flex-1 max-w-xl mx-auto px-4 py-8 md:p-8 w-full h-screen w-screen items-center">
          <h1 className="mt-16">Submit Response</h1>
          <h3>Please fill out the form below</h3>
          <form className="w-full max-w-sm mt-16">
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
                >
                  <option>John</option>
                  <option>Sam</option>
                  <option>Jane</option>
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
                >
                  <option>0</option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
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
                >
                  <option>Sam</option>
                  <option>John</option>
                  <option>Jane</option>
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
              type="button"
            >
              Submit
            </button>
          </form>
        </div>
      </Layout>
    );
  }
}
