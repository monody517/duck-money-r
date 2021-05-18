import React, { FC } from 'react'
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
    return(
        <Wrapper>
            <ul>
                <li className={'selected'}>支出</li>
                <li className={'selected'}>收入</li>
            </ul>
      </Wrapper>
    )
}

export default TypeSection