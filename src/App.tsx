import './App.css';
import styled from 'styled-components'
import React from "react";
import './helper.scss'
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import Nav from 'components/Nav';


const Wrapper = styled.div`
  height:100vh;
  display:flex;
  flex-direction:column-reverse;
  font-family:$font-hei;
`
const Main = styled.div`
flex-grow:1`


export default function App() {
  return (
    <Router>
      <Wrapper>
        <Nav/>
        <Main>
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
        </Main>
      </Wrapper>
    </Router>
  );
}

function NoMatch(){
  return <h2>没有</h2>
}
function Statistics() {
  return <h2>统计页</h2>;
}

function Tags() {
  return <h2>标签页</h2>;
}

function Money() {
  return <h2>记账页</h2>;
}

