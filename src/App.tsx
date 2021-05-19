import './App.css';
import './helper.scss'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import React from 'react';
import Tags from './views/Tags'
import Statistics from 'views/Statistics';
import Money from 'views/Moneys';
import TagEdit from 'views/TagEdit';

export default function App() {
  return (
    <Router>
        <Switch>
        <Route path="/tags/:tag" exact={true}>
            <TagEdit />
          </Route>
          <Route path="/tags">
            <Tags />
          </Route>
          <Route path="/money">
            <Money />
          </Route>
          <Route path="/statistics">
            <Statistics />
          </Route>
          <Redirect exact from="/" to="/money"></Redirect>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
    </Router>
  );
}

function NoMatch(){
  return <h2>没有</h2>
}






