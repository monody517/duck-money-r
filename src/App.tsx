import './App.css';
import styled from 'styled-components'
import React from "react";
import {
  HashRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const Wrapper = styled.div`
  height:100vh;
  display:flex;
  flex-direction:column-reverse;
`
const Main = styled.div`
flex-grow:1`

const Nav = styled.nav`
  ul{
    display:flex;
    >li{
      width:33.33%;
      text-align: center;
      padding: 16px;
    }
  }
`

export default function App() {
  return (
    <Router>
      <Wrapper>
        <Nav>
          <ul>
            <li>
              <Link to="/tags">标签页</Link>
            </li>
            <li>
              <Link to="/money">记账页</Link>
            </li>
            <li>
              <Link to="/statistics">统计页</Link>
            </li>
          </ul>
        </Nav>
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

