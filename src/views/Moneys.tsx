import Layout from "components/Layout";
import React, { useState } from "react";

import TypeSection from '../components/money/TypeSection'
import TagsSection from '../components/money/TagsSection'
import NotesSection from '../components/money/NotesSection'
import NumberSection from '../components/money/NumberSection'
import { useRecords } from "hooks/useRecords";

function Money() {
  const defaultFormData = {
    tagIds:[] as number[],
    type:'-' as ('-' | '+'),
    note:'',
    amount:'0'
  }

  const [selected,setSelected] = useState(defaultFormData)
  type Selected = typeof selected
  const onChange = (obj:Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj
    }
    )
  }

  const {addRecord} = useRecords()
  const onSubmit = () => {
    if(addRecord(selected)){
      addRecord(selected)
      alert('保存成功')
      setSelected(defaultFormData)
    }
  }
  
    return (
      <Layout scrollTop={9999}>
        <TypeSection
          type={selected.type}
          onChange={type=>onChange({type})}
          ></TypeSection>
        <TagsSection 
        selected={selected.tagIds}
        type={selected.type}
        onChange={tagIds=>onChange({tagIds})}
        ></TagsSection>
        <NotesSection
          note={selected.note}
          onChange={note=>onChange({note})}
        ></NotesSection>
        <NumberSection
          number={selected.amount}
          onChange={number=>onChange({amount: number})}
          onOk={()=>onSubmit()}
        ></NumberSection>
      </Layout>
      );
  }

  export default Money