import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from './icon'


const NavWarpper = styled.nav`
  ul{
    display:flex;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    >li{
      width:33.33%;
      text-align: center;
      padding: 4px 0;
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
      .icon{
        width:24px;
        height:24px;
      }
    }
  }
`

const Nav =() => {
    return(
        <NavWarpper>
            <ul>
            <li>
              <Icon name='money'></Icon>
            <Link to="/tags">标签页</Link>
            </li>
            <li>
            <Icon name='tag'></Icon>
            <Link to="/money">记账页</Link>
            </li>
            <li>
            <Icon name='statistics'></Icon>
            <Link to="/statistics">统计页</Link>
            </li>
        </ul>
      </NavWarpper>
    )
}

export default Nav