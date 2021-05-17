import Layout from "components/Layout";
import React from "react";
import styled from "styled-components";
import Icon from '../components/icon'

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
const TagsSection = styled.section`
ol{
  height:150px;
  overflow:hidden;
  display:flex;
  align-content: flex-start;
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
      .icon{
        width: 50px;
        height: 25px;
      }
  }
}`
const NotesSection = styled.section`
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
const NumberSection = styled.section`
@import '../helper.scss';
$bg:#fbaa00;
.numberPad{
    .output{
        @extend %clearFix;
        @extend %innerShadow;
        font-size: 36px;
        font-family: Consolas, monospace;
        padding: 5px 16px;
        text-align: right;
        border:1px solid #d9d9d9
    }
    .buttons{
        @extend %clearFix;
        > button{
            width: 25%;
            height: 79px;
            background: transparent;
            border: none;
            border-right: 1px #d9d9d9 solid;
            border-bottom: 1px #d9d9d9 solid;
            float: left;
            &.ok{
                height: 158px;
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
}`

function Money() {
    return (
      <Layout>
        <TypeSection>
          <ul>
            <li className={'selected'}>支出</li>
            <li className={'selected'}>收入</li>
          </ul>
        </TypeSection>
        <TagsSection>
          <ol>
            <li>
              <Icon name='study'></Icon>衣</li>
            <li>食</li>
            <li>住</li>
            <li>行</li>
            <li>
            <Icon name='add'></Icon>新增</li>
          </ol>
        </TagsSection>
        <NotesSection>
          <label className='notes'>
            <span>备注</span>
            <input type='text'></input>
          </label>
        </NotesSection>
        <NumberSection>
          <div className='numberPad'>
            <div className='output'>100</div>
            <div className='buttons'>
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
          </div>
        </NumberSection>
      </Layout>
      );
  }

  export default Money