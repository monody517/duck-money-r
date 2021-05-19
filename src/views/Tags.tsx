import Layout from "components/Layout";
import { useTags } from "components/money/useTags";
import { createId } from "lib/createId";
import React, { FC } from "react";
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

type Props = {
  type:('-' | '+')
}

const Tags:FC<Props> = (prop) => {
  const {tags,setTags} = useTags()
  const onAddTag = () => {
    const tagName = window.prompt('请问新标签的名称为？')
    if(tagName !== null){
      setTags([...tags,{id:createId(),name:tagName,type:prop.type}])
    }
  }
    return (
      <Layout>
        <Wrapper>
        <ol>
          {tags.map(t=>{
            return(
              <li key={t.id}>
                <Link to={'/tags/' + t.id}>
                  {t.name}
                  <Icon name={t.name}></Icon>
                </Link>
              </li>
            )
          })}
        </ol>
        <div className='createdTag' onClick={onAddTag}>
          <span>新建标签</span>
        </div>
        </Wrapper>
      </Layout>
      );
  }

export default Tags