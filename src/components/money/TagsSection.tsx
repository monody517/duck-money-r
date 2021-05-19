import { createId } from 'lib/createId';
import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import Icon from '../../components/icon'
import {useTags} from './useTags'

const Wrapper = styled.section`
  flex-grow:1;
ol{
  overflow:auto;
  display:flex;  
  flex-wrap:wrap;
  margin-left: 25px;
  >li{
    border:1px solid #c9c9c9;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width:92px;
    height:46px;
    border-radius:12px;
    margin-right:15px;
    margin-top:10px;
    > a{
      display:flex;
      flex-direction:column;
      justify-content: center;
      align-items: center;
    }
    &.selected{
      background:#fbaa00;
      color:white;
    }
      .icon{
        width: 50px;
        height: 25px;
      }
  }
}`

type Props = {
  selected:number[]
  type:('-' | '+')
  onChange:(selected:number[])=>void
}
const TagsSection:FC<Props> = (prop) => {
  const {tags} = useTags()
  const newTags = tags.filter((t)=>t.type === prop.type)
  const selectedIds = prop.selected
  const onToggleTag = (tagId:number) => {
    const index = selectedIds.indexOf(tagId)
    if(index>=0){
      prop.onChange(selectedIds.filter(t=>t!==tagId))
    }else{
      prop.onChange([...selectedIds,tagId])
    }
  }
    return(
        <Wrapper>
          <ol>
            {newTags.map(tag=>{
              return(
              <li key={tag.id}
              onClick={()=>onToggleTag(tag.id)}
              className={selectedIds.indexOf(tag.id)>=0?'selected':''}
              >
                <Icon name={tag.name}></Icon>
                {tag.name}
              </li>
            )})}
              <li>
                <Link to="/tags">
                  <Icon name="标签管理"></Icon>
                  标签管理
                </Link>
              </li>
            
          </ol>
        </Wrapper>
    )
}

export default TagsSection