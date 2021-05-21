import React, { useEffect, useRef } from "react";
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

type Prop = {
  className?: string,
  scrollTop?:number
}

const Layout:React.FC<Prop> = (prop:any) => {
  const main = useRef<HTMLDivElement>(null)
    useEffect(()=>{
      setTimeout(()=>{
        if(main.current){
          main.current.scrollTop = prop.scrollTop
        }
      },0)
    },[prop.scrollTop])

    return(
        <Wrapper>
        <Main ref={main} className={prop.className}>
          {prop.children}
        </Main>
          <Nav></Nav>
      </Wrapper>
    )
}
export default Layout