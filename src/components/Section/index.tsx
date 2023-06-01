import {css} from "@emotion/react";
import imgUrl from "./sectionImg.png"
import {FC} from "react";


const styles = css`
  width: 370px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 5px;
  text-align: center;
  font-size: 14px;
  font-family: sans-serif;
  
  h1{
    margin: 0;
  }  
  a{
    color: #2751F4;
    background-color: #F0F5FF;
    text-decoration: none;
    margin-bottom: 15px;
    border-radius: 8px;
    padding: 6px;
    font-size: 13px;
    border: 1.4px solid #2751F4
  }  
  img {
    width: 260px;
  }
  .user-id{
    margin-top: 20px;
    font-size: 13px;
  }
  p{
    font-size: 12px;
    color: #B6B9C2;
    margin: 0
  }
  button {
    background-color: #2751F4;
    color: rgba(255, 255, 255, 1);
    padding: 8px 16px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
  }
`

type Props = {
    userId?: string | number;
    onClick?: () => void;
}


const Section:FC<Props> = ({userId, onClick}) => {
    return(
        <div css={styles}>
            <img src={imgUrl}/>
            <h1>Thank you for choosing  Sentium Insights</h1>
            <span className='user-id'>Your User ID</span>
            <a href='' >loremipsum@ipsumlorem.com</a>
            <button onClick={onClick}>Start</button>
            <p>Manage your subscription</p>
        </div>
    )};

export default Section;