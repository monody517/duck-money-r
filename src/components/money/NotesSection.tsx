import React, { FC, useState } from 'react'
import styled from "styled-components";

const Wrapper = styled.section`
.notes{
    font-size: 14px;
    background: #f5f5f5;
    padding-left: 16px;
    display: flex;
    align-items: center;
    > span{
        padding-right: 16px;
    }
    > input{
        height: 54px;
        flex-grow: 1;
        border: none;
        background: transparent;
    }
}`

const NotesSection:FC = () => {
    const [node,setNode] = useState('')
    console.log(node);
    
    return(
        <Wrapper>
        <label className='notes'>
        <span>备注</span>
        <input type='text' placeholder='请在此添加备注'
        value={node}
        onChange={ (e)=>setNode(e.target.value) }></input>
      </label>
      </Wrapper>
    )
}

export default NotesSection