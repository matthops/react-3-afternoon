import React, { Component } from "react";

import "./Search.css";

import SearchIcon from "react-icons/lib/md/search";

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor() {
    super();

    this.state = {
      searchTerm: ""
    };
  }

  updateSearchTerm(value) {
    this.setState({ searchTerm: value });
  }

  filterPost() {
    const { searchTerm } = this.state;
    const { filterPostFn } = this.props;
    filterPostFn(searchTerm);
  }

  render() {
    const { searchTerm } = this.state;
    const { filterPostFn } = this.props;
    console.log(searchTerm);
    return (
      <section className="Search__parent">
        <div className="Search__content">
          <input
            placeholder="Search Your Feed"
            value={searchTerm}
            onChange={e => this.updateSearchTerm(e.target.value)}
          />

          <SearchIcon id="Search__icon" onClick={filterPostFn} />
        </div>
      </section>
    );
  }
}
