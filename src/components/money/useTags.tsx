import { createId } from "lib/createId";
import { useState } from "react";

const defaultTags:{id:number,name:string,type:('-' | '+')}[] =[
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

const useTags= () => {
    const [tags,setTags] = useState<{id:number,name:string,type:('-' | '+')}[]>(defaultTags)
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
        console.log(index);
        const cloneTags =JSON.parse(JSON.stringify(tags))
        cloneTags.splice(index,1,{id:id,name:obj.name,type:tags[index].type})
        console.log(cloneTags);       
        setTags(cloneTags)
    }
    return(
        {tags,
        setTags,
        findTag,
        EditTag,
        findTagIndex}
    )
}

export {useTags}
