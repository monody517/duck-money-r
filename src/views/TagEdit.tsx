import Icon from 'components/icon';
import Layout from 'components/Layout';
import { useTags } from 'components/money/useTags';
import React, { FC } from 'react'
import { useParams } from 'react-router'
import styled from 'styled-components';

type Params = {
    id:string;
}

const Wrapper = styled.section`
.nav{
    padding: 10px 0;
}
span{
    position: relative;
    left: 45%;
    margin-left: -32px;
}
.notes{
    font-size: 14px;
    background: #f5f5f5;
    padding-left: 16px;
    display: flex;
    align-items: center;
    > input{
        height: 54px;
        flex-grow: 1;
        border: none;
        background: transparent;
        :focus{
            outline: none;
        }
    }
}
.delect{
    display: flex;
        background: #fbaa00;
        padding: 15px 0;
        span{
            color: white;
            position: relative;
            left: 50%;
            margin-left: -32px;
        }
    }

`

const TagEdit:FC = (prop) => {
    const {findTag} = useTags()
    const {id} = useParams<Params>()
    const tag = findTag(parseInt(id))
    const {EditTag} = useTags()
    return(
        <Layout>
            <Wrapper>
                <header className='nav'>
                    <Icon name='left'></Icon>
                    <span>编辑标签</span>
                </header>
                <div>
                    <label className='notes'>
                    <input type='text' placeholder={tag.name}onChange={(e)=>{EditTag(tag.id,{name:e.target.value})}}></input>
                    </label>
                </div>
                <div className='delect'>
                    <span>删除标签</span>
                </div>
            </Wrapper>
        </Layout>
    )
}

export default TagEdit