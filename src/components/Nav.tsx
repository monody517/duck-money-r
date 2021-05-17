import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Icon from './icon'


const NavWarpper = styled.nav`
  ul{
    display:flex;
    box-shadow: 0 0 3px rgba(0,0,0,0.25);
    >li{
      >a{
        display:flex;
        flex-direction:column;
        justify-content: center;
        padding: 4px 0;
        align-items: center;
        .icon{
        width:24px;
        height:24px;
        }
        &.selected{
          color:red;
          .icon{
            fill:red;
          }
        }
      }
      width:33.33%;
      text-align: center;
    }
  }
`

const Nav =() => {
    return(
        <NavWarpper>
            <ul>
            <li>  
            <NavLink to="/tags" activeClassName="selected">
              <Icon name='money'></Icon>
              标签页
            </NavLink>
            </li>
            <li>
            <NavLink to="/money" activeClassName="selected">
              <Icon name='tag'></Icon>
              记账页
            </NavLink>
            </li>
            <li>
            <NavLink to="/statistics" activeClassName="selected">
              <Icon name='statistics'></Icon>
              统计页
            </NavLink>
            </li>
        </ul>
      </NavWarpper>
    )
}

export default Nav