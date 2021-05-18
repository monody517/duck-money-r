import Layout from "components/Layout";
import React from "react";
import Icon from '../components/icon'
import TypeSection from '../components/money/TypeSection'
import TagsSection from '../components/money/TagsSection'
import NotesSection from '../components/money/NotesSection'
import NumberSection from '../components/money/NumberSection'

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
        </NumberSection>
      </Layout>
      );
  }

  export default Money