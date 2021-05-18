import styled from "styled-components";

const TagsSection = styled.section`
  flex-grow:1;
ol{
  height:150px;
  overflow:hidden;
  display:flex;  
  flex-wrap:wrap;
  margin-left: 25px;
  >li{
    border:1px solid #c9c9c9;
    display:flex;
    flex-direction:column;
    justify-content: center;
    align-items: center;
    width:92px;
    height:46px;
    border-radius:12px;
    margin-right:15px;
    margin-top:10px;
      .icon{
        width: 50px;
        height: 25px;
      }
    

  }
}`

export default TagsSection