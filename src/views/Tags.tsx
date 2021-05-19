import Layout from "components/Layout";
import { useTags } from "components/money/useTags";
import React from "react";

function Tags() {
  const {tags,setTags} = useTags()
    return (
      <Layout>
        <h2>t</h2>
      </Layout>
      );
  }

export default Tags