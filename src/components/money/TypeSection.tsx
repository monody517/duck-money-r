import styled from "styled-components";

const TypeSection = styled.section`
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

export default TypeSection