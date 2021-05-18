import styled from "styled-components";

const NumberSection = styled.section`
$bg:#fbaa00;
    .output{
        font-size: 36px;
        font-family: Consolas, monospace;
        padding: 5px 16px;
        text-align: right;
        border:1px solid #d9d9d9
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

export default NumberSection