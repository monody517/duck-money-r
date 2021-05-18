import Layout from "components/Layout";
import React, { useState } from "react";

import TypeSection from '../components/money/TypeSection'
import TagsSection from '../components/money/TagsSection'
import NotesSection from '../components/money/NotesSection'
import NumberSection from '../components/money/NumberSection'

function Money() {
  const [selected,setSelected] = useState({
    tags:[] as string[],
    type:'-' as ('-' | '+'),
    note:'',
    number:'0'
  })
    return (
      <Layout>
        <TypeSection
          type={selected.type}
          onChange={(type:('-' | '+'))=>setSelected({
            ...selected,
            type:type
          })}
        ></TypeSection>
        <TagsSection 
        selected={selected.tags}
        onChange={(tags)=>setSelected({
          ...selected,
          tags:tags
        })}
        ></TagsSection>
        <NotesSection
          note={selected.note}
          onChange={(note:string)=>setSelected({
            ...selected,
            note:note
          })}
        ></NotesSection>
        <NumberSection
          number={selected.number}
          onChange={(number:string)=>setSelected({
            ...selected,
            number
          })}
        ></NumberSection>
      </Layout>
      );
  }

  export default Money