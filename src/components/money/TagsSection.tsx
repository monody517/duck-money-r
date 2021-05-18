import React, { FC, useState } from 'react'
import styled from "styled-components";
import Icon from '../../components/icon'

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

const TagsSection:FC = () => {
  const [tags,setTags] = useState<string[]>(['衣','食','住','行'])
  const [selectedTag,setSelectedTag] = useState([''])
  const onAddTag = () => {
    const tagName = window.prompt('请问新标签的名称为？')
    if(tagName !== null){
      setTags([...tags,tagName])
    }
  }
  const onToggleTag = (tag:string) => {
    const index = selectedTag.indexOf(tag)
    if(index>=0){
      setSelectedTag(selectedTag.filter(t=>t!==tag))
    }else{
      setSelectedTag([...selectedTag,tag])
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