import React from "react";
import styled from "styled-components"
import Nav from "./Nav";

const Wrapper = styled.div`
  height:100vh;
  display:flex;
  flex-direction:column;
  font-family:$font-hei;
`
const Main = styled.div`
flex-grow:1`

const Layout = (prop:any) => {
    return(
        <Wrapper>
        <Main>
          {prop.children}
        </Main>
          <Nav></Nav>
      </Wrapper>
    )
}
export default Layout