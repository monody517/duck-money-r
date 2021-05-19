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
type Selected = typeof selected
const onChange = (obj:Partial<Selected>) => {
    setSelected({
      ...selected,
      ...obj
    }
    )
}
    return (
      <Layout>
        <TypeSection
          type={selected.type}
          onChange={type=>onChange({type})}
          ></TypeSection>
        <TagsSection 
        selected={selected.tags}
        onChange={tags=>onChange({tags})}
        ></TagsSection>
        <NotesSection
          note={selected.note}
          onChange={note=>onChange({note})}
        ></NotesSection>
        <NumberSection
          number={selected.number}
          onChange={number=>onChange({number})}
        ></NumberSection>
      </Layout>
      );
  }

  export default Money