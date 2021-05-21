import React from "react";
import styled from "styled-components"
import Nav from "./Nav";

const Wrapper = styled.div`
  min-height:100vh;
  display:flex;
  flex-direction:column;
  font-family:$font-hei;
`
const Main = styled.div`
display:flex;
flex-direction:column;
flex-grow:1;
background:#f7f7f7;
`

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