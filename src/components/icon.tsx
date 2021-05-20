import React from 'react'
import classnames from 'classnames'


let importAll = (requireContext: __WebpackModuleApi.RequireContext) => requireContext.keys().forEach(requireContext);
try {importAll(require.context('../icons', true, /\.svg$/));} catch (error) {console.log(error);}

type Prop = {
    name:string  
}
 & React.SVGAttributes<SVGElement>

const Icon = (prop:Prop) => {
    const {name,children,className,...rest} = prop
    const existTag = ['食物','房租','购物','水果','家居','学习','工资','兼职','礼金','投资','left','money','statistics','tag','标签管理']
    const findName = (name:string) => {
        if(existTag.indexOf(name)>=0){
            return name
        }else{
            return 'star'
        }
    }
    return(
        <svg className={classnames('icon', className)} {...rest}>
            {prop.name && <use xlinkHref={'#' +findName(prop.name)}/>}
        </svg>
    )
}

export default Icon