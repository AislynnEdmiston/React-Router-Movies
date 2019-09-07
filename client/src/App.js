import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';
import SavedList from './Movies/SavedList';

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };
// <Route path="/users"/ component={Users} /> syntax for route
  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path='/' component={MovieList}/>
      <Route path='/movie/:id' render={(props) => <Movie {...props}/>}/>
      {/* <div>Replace this Div with your Routes</div> */}
    </div>
  );
};

export default App;
