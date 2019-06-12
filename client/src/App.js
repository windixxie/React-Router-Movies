import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  addToSavedList = movie => {
    const savedList = this.state.savedList;
    if (!savedList.some(x => x.id === movie.id)){
      savedList.push(movie);
      this.setState({ savedList }, () => console.log(this.state.savedList));
    }
  };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />
        <Route exact path="/" component={MovieList} />
        <Route path="/movies/:id" render={props => <Movie {...props} addToSavedList={this.addToSavedList} />} />
      </div>
    );
  }
}