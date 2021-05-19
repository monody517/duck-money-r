import Layout from "components/Layout";
import { useTags } from "components/money/useTags";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Icon from '../components/icon'

const Wrapper = styled.section`
  display:flex;
  flex-grow:1;
  flex-direction:column;
    > ol{
        display:flex;
        flex-wrap: wrap;
        margin-left: 23px;
        overflow: auto;
        align-content: flex-start;
        flex-grow:1;
        > li{
          >a{
            display: flex;
            padding: 2px 20px;
            border-radius: 12px;
            margin-right: 20px;
            margin-top: 10px;
            flex-direction: column-reverse;
            justify-content: center;
            align-items: center;
            border: 1px solid #c9c9c9;
            .icon{
                width: 50px;
                height: 25px;   
            }  
          }    
        }
    }
    .createdTag{
        display: flex;
        background: #fbaa00;
        padding: 15px 0;
        span{
            color: white;
            position: relative;
            left: 50%;
            margin-left: -32px;
        }
    }
`

function Tags() {
  const {tags} = useTags()
    return (
      <Layout>
        <Wrapper>
        <ol>
          {tags.map(t=>{
            return(
              <li key={t.id}>
                <Link to={'/tags/' + t}>
                  {t.name}
                  <Icon name={t.name}></Icon>
                </Link>
              </li>
            )
          })}
        </ol>
        <div className='createdTag'>
          <span>新建标签</span>
        </div>
        </Wrapper>
      </Layout>
      );
  }

export default Tags