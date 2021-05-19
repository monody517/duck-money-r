import Layout from "components/Layout";
import { useTags } from "components/money/useTags";
import React from "react";

function Tags() {
  const {tags,setTags} = useTags()
    return (
      <Layout>
        <ol>
          {tags.map(t=>{
            return <li key='t'>{t}</li>
          })}
        </ol>
      </Layout>
      );
  }

export default Tags