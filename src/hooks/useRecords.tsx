import { useEffect, useState } from "react"
import { useUpdate } from "./useUpdate"

type newRecordItem = {
    tagIds:number[],
    note:string,
    type:'+' | '-'
    amount:string
}
type RecordItem = newRecordItem & {
    createdAt:string
}

const useRecords = () => {
    const [records,setRecords] = useState<RecordItem[]>([])
    const addRecord = (newRecord:newRecordItem) => {
        const record = {...newRecord,createdAt:(new Date()).toISOString()}
        setRecords([...records,record])
    }
    useEffect(()=>{
        setRecords(JSON.parse(window.localStorage.getItem('records') || '[]'))
    },[])
    useUpdate(()=>{
        window.localStorage.setItem('records',JSON.stringify(records))
    },[records])
    return{records,addRecord}
}

export {useRecords}