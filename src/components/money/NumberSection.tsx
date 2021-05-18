import React, { FC, useState } from 'react'
import styled from "styled-components";

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
        background: darken(#f2f2f2, 4*2%);
    }
`

const NumberSection:FC = () => {
    const [output,_setOutput] = useState('0')
    const setOutput = (output:string) => {
        if(output.length>=16){
            return
        }else if(output.length === 0){
            output = '0'  
        }
        _setOutput(output)
    }
    const onClickButtons = (e:React.MouseEvent) => {
        const text = (e.target as HTMLButtonElement).textContent
        if(text === null){return}
        switch(text){
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
            case '0':
                if(output === '0'){               
                    setOutput(text)
                }else{
                    setOutput(output+text)
                }
                break;
            case '删除':
                setOutput(output.slice(0,-1))
                break;
            case '清空':
                setOutput('0')
                break;
            case 'OK':
                console.log('ok');
                break;
            case '.':
                if(output.indexOf('.')>=0){
                    return
                }else{
                    setOutput(output+'.')
                }
        }
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