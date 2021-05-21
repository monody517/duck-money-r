import React, { FC } from 'react'
import styled from "styled-components";
import { generateOutput } from './generateOutput';

const Wrapper = styled.section`
$bg:#fbaa00;
    .output{
        font-size: 36px;
        font-family: Consolas, monospace;
        padding: 5px 16px;
        text-align: right;
        border:1px solid #d9d9d9;
    }
    .buttons{
        > button{
            width: 25%;
            height: 64px;
            background: transparent;
            border: none;
            border-right: 1px #d9d9d9 solid;
            border-bottom: 1px #d9d9d9 solid;
            float: left;
            &.ok{
                height: 128px;
                float:right;
                background: #fbaa00;
            }
            &.zero{
                width: 50%;
            }
        }   
    }
    button:active{
        background: #e2e2e2
    }
`
type Prop = {
    number:string,
    onChange:(number:string)=>void
    onOk?:()=>void
}
const NumberSection:FC<Prop> = (prop) => {
    const output = prop.number
    const setOutput = (output:string) => {
        if(output.length>=16){
            return
        }else if(output.length === 0){
            output = '0'
        }
        prop.onChange(output)
    }
    const onClickButtons = (e:React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent
        if(text === null){return}
        if(text === 'OK'){
            if(prop.onOk){
                prop.onOk()
            }    
        }
        setOutput(generateOutput(text,output))
    }
    return(
        <Wrapper>
        <div className='output'>{output}</div>
        <div className='buttons' onClick={onClickButtons}>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>删除</button>
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>清空</button>
          <button>7</button>
          <button>8</button>
          <button>9</button>
          <button className='ok'>OK</button>
          <button className="zero">0</button>
          <button>.</button>
        </div>
        </Wrapper>
    )
}

export default NumberSection