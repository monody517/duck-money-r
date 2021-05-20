import { useEffect, useRef } from "react"

const useUpdate = (fn:()=>void,deps:[{id:number,name:string,type:('-' | '+')}[]]) => {
    const count = useRef(0)
    useEffect(()=>{
        count.current+=1
    })
    useEffect(()=>{
        fn()
    } , deps)
}

export {useUpdate}