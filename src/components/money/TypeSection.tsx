import React, { FC, useState } from 'react'
import styled from "styled-components";

const Wrapper = styled.section`
ul{
    display: flex;
    text-align: center;
    font-size: 24px;
    > li{
        width: 50%;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        &.selected::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 4px;
            background: #fbaa00;
            bottom: 0;
            left: 0;
        }
    }
}`

const TypeSection:FC = () => {
    const [typeList] = useState<('-'|'+')[]>(['-','+'])
    const [currentType,setCurrentType] = useState('-')
    const typeMap = {'-':'支出','+':'收入'}
    return(
        <Wrapper>
            <ul>
                {typeList.map(t=>{
                    return(
                        <li
                        key={t}
                        className={currentType===t?'selected':''}
                        onClick={()=>setCurrentType(t)}
                        >{typeMap[t]}</li>
                    )
                })}
            </ul>
      </Wrapper>
    )
}

export default TypeSection