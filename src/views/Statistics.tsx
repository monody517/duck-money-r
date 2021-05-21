import Layout from "components/Layout";
import TypeSection from "components/money/TypeSection";
import { useRecords } from "hooks/useRecords";
import { useTags } from "hooks/useTags";
import React, { useState } from "react";
import day from 'dayjs'
import styled from "styled-components";

type newRecordItem = {
  tagIds:number[],
  note:string,
  type:'+' | '-'
  amount:string
}
type RecordItem = newRecordItem & {
  createdAt:string
}

const Item = styled.section`
padding:8px 16px;
line-height: 24px;
display: flex;
justify-content: space-between;
background: white;
margin: 6px;
height: 48px;
border-radius: 5px;
.title{
  font-size: 13px;
  padding:8px 16px;
  line-height: 24px;
}
>.note{
  margin-right: auto;
  margin-left: 16px;
  color:#999;
  font-size: 13px;
}
`
const NoRecord = styled.section`
    padding: 16px;
    text-align: center;
`

function Statistics() {
  const [type,setType] = useState<'-'|'+'>('-')
  const {records} = useRecords()
  const {getName} = useTags()
  const newRecords = records.filter(r=>r.type === type)
  const hash:{[K:string]:RecordItem[]} = {}
  newRecords.map(r=>{
    const key = day(r.createdAt).format('YYYY年MM月DD日')
    if(!(key in hash)){
      hash[key] = []
      hash[key].push(r)
    }
  })
  const array = Object.entries(hash)
    return (
      <Layout>
        <TypeSection
        type={type}
        onChange={type=>setType(type)}
        ></TypeSection>
        {array.length !== 0 ? array.map(x=>{return <div>
            <h3 className='title'>{x[0]}</h3>
          {x[1].map(r=>{
            return <Item>
            <div className="tags">
              {r.tagIds.map(t=><span>{getName(t)}</span>)}
            </div>
            {r.note && <div className="note">
              {r.note}
            </div>}
            <div className="amount">
              {'￥' + r.amount}
            </div>      
            </Item>
          })}   
          </div>      
          }): 
          <NoRecord>没有记录，快去记账吧</NoRecord>
        }
      </Layout>
      );
  }

export default Statistics