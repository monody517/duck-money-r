import React, { FC } from 'react'
import styled from "styled-components";
import Icon from '../../components/icon'
import {useTags} from './useTags'

const Wrapper = styled.section`
  flex-grow:1;
ol{
  height:150px;
  overflow:hidden;
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
  selected:string[]
  onChange:(selected:string[])=>void
}
const TagsSection:FC<Props> = (prop) => {
  const {tags,setTags} = useTags()
  const selectedTag = prop.selected
  const onAddTag = () => {
    const tagName = window.prompt('请问新标签的名称为？')
    if(tagName !== null){
      setTags([...tags,tagName])
    }
  }
  const onToggleTag = (tag:string) => {
    const index = selectedTag.indexOf(tag)
    if(index>=0){
      prop.onChange(selectedTag.filter(t=>t!==tag))
    }else{
      prop.onChange([...selectedTag,tag])
    }
  }
    return(
        <Wrapper>
          <ol>
            {tags.map(tag=>{
              return(
              <li key={tag} 
              onClick={()=>onToggleTag(tag)}
              className={selectedTag.indexOf(tag)>=0?'selected':''}
              >
                <Icon name={tag}></Icon>
                {tag}
              </li>
            )})}
            <li onClick={onAddTag}>
              <Icon name="add"></Icon>
              新增标签
            </li>
          </ol>
        </Wrapper>
    )
}

export default TagsSection