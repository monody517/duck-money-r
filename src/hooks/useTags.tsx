import { useUpdate } from "hooks/useUpdate";
import { createId } from "lib/createId";
import { useEffect, useState } from "react";

const useTags= () => {
    const [tags,setTags] = useState<{id:number,name:string,type:('-' | '+')}[]>([])

    useEffect(()=>{
        let localTags = (JSON.parse(window.localStorage.getItem('tags')||'[]'))
        if(localTags.length === 0){
            localTags = [
                {id:createId(),name:'食物',type:'-'},
                {id:createId(),name:'房租',type:'-'},
                {id:createId(),name:'购物',type:'-'},
                {id:createId(),name:'水果',type:'-'},
                {id:createId(),name:'家居',type:'-'},
                {id:createId(),name:'学习',type:'-'},
                {id:createId(),name:'工资',type:'+'},
                {id:createId(),name:'兼职',type:'+'},
                {id:createId(),name:'礼金',type:'+'},
                {id:createId(),name:'投资',type:'+'},
            ]
        }
        setTags(localTags)
    },[])

    useUpdate(()=>{
        window.localStorage.setItem('tags',JSON.stringify(tags))
    },[tags])

    const findTag = (id:number) => tags.filter(t=>t.id===id)[0]
    const findTagIndex = (id:number) => {
        let result = -1
        for(let i = 0;i<tags.length;i++){
            if(tags[i].id === id){
                result = i;
                break
            }
        }
        return result
    }
    const EditTag = (id:number,obj:{name:string}) => {
        const index = findTagIndex(id)
        const cloneTags =JSON.parse(JSON.stringify(tags))
        cloneTags.splice(index,1,{id:id,name:obj.name,type:tags[index].type})      
        setTags(cloneTags)
    }
    const delectTag = (id:number) => {
        const index = findTagIndex(id)       
        const cloneTags = JSON.parse(JSON.stringify(tags))
        cloneTags.splice(index,1)
        setTags(cloneTags)      
    }
    const AddTag = (type:('-'|'+')) => {
        const tagName = window.prompt('请问新标签的名称为？')
        if(tagName !== null){
          setTags([...tags,{id:createId(),name:tagName,type:type}])
        }
    }
    const getName = (id:number) => {
        const tagName = tags.filter(t=>t.id === id)[0].name
        return tagName? tagName : ''
    }
    return(
        {tags,
        setTags,
        findTag,
        EditTag,
        findTagIndex,
        delectTag,
        AddTag,
        getName}
    )
}

export {useTags}
