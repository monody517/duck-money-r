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
>.note{
  margin-right: auto;
  margin-left: 16px;
  color:#999;
  font-size: 13px;
}
`

function Statistics() {
  const [type,setType] = useState<'-'|'+'>('-')
  const {records} = useRecords()
  const {getName} = useTags()
    return (
      <Layout>
        <TypeSection
        type={type}
        onChange={type=>setType(type)}
        ></TypeSection>
        <div>
          {records.map(r=>{
            return <Item>
              {/* {day(r.createdAt).format('YYYY年MM月DD日')} */}
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
      </Layout>
      );
  }

export default Statistics