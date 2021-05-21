import { useEffect, useRef } from "react"


const useUpdate = (fn:()=>void,
    deps:[{id:number,name:string,type:('-' | '+')}[] | 
    {
        tagIds:number[],
        note:string,
        type:'+' | '-'
        amount:string
    }[]]
    ) => {
    const count = useRef(0)
    useEffect(()=>{
        count.current+=1
    })
    useEffect(()=>{
        fn()
    }, deps) // eslint-disable-line react-hooks/exhaustive-deps
}

export {useUpdate}