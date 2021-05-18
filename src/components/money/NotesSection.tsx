import React, { FC, useRef, useState } from 'react'
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
    const [note,setNode] = useState('')
    const refInput = useRef<HTMLInputElement>(null)
    const onBlur = () => {
        if(refInput.current!== null){
            setNode(refInput.current.value)
        }
    } 
    return(
        <Wrapper>
        <label className='notes'>
        <span>备注</span>
        <input type='text' placeholder='请在此添加备注'
        ref={refInput}
        defaultValue={note}
        onBlur={onBlur}></input>
      </label>
      </Wrapper>
    )
}

export default NotesSection