import './App.css';
import styled from 'styled-components'
import React from "react";
import './helper.scss'
import {
  HashRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Nav from 'components/Nav';
import Layout from 'components/Layout';





export default function App() {
  return (
    <Router>
        <Switch>
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
function Statistics() {
  return (
    <Layout>
      <h2>s</h2>
    </Layout>
    );
}

function Tags() {
  return (
    <Layout>
      <h2>t</h2>
    </Layout>
    );
}

function Money() {
  return (
    <Layout>
      <h2>m</h2>
    </Layout>
    );
}

