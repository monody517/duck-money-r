import { useTags } from 'components/money/useTags';
import React, { FC } from 'react'
import { useParams } from 'react-router'

type Params = {
    id:string;
}

const TagEdit:FC = (prop) => {
    const {findTag} = useTags()
    const {id} = useParams<Params>()
    const tag = findTag(parseInt(id))
    return(
        <div>{tag.name}</div>
    )
}

export default TagEdit