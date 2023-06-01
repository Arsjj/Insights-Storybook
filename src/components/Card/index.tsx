import React from 'react';
import {css} from  '@emotion/react';
import {Avatar, Image} from "antd";
import src from "./profile.png"
import {UserOutlined} from "@ant-design/icons";

const styles = css`
  width: 300px;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 0px 3px rgba(1, 32, 154, 0.15);
  font-family: sans-serif;
  
  .name {
    margin: 10px 0; 
  }
  
  .type {    
    span:nth-child(2){
    color : rgba(39, 81, 244, 1)
    }
  }
  
  .user-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    
    .status{
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0px 8px;
      width: 41px;
      height: 20px;
      font-size: 14px;
      color: #13C2C2;
      background: rgba(19, 194, 194, 0.2);
      border: 1px solid #13C2C2;
      border-radius: 16px;
    }
    
  }
`

const stepContainerStyles= css`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 30px;
  padding-bottom: 8px;
  //border-bottom: 1px solid gray;
  
  .steps {
    display: flex;
    justify-content: center;
    gap: 5px;
    width: 100%;
    
    .step {
      width: 16%;
      height: 5px;
      background-color: rgba(211, 214, 222, 1);
      border-radius: 20px;
      
      &.current {
        background-color: rgba(122, 158, 255, 1);
      }
    }
  }
  
  .line {
    width: 100%;
    height: 1px;
    border-radius: 20px;
    background-color: rgba(211, 214, 222, 1);
  }
    
  
     
  
  
`

const stepStyle = css`
    
`

type Props = {
    name: string
    type: string
    current: number
    img: string
    status: string
}

const SeCard = () => {
    const steps = [1,2,3,4,5,6]
    const current = 3

    return (
        <div css={styles}>
            <h3 className="name">JOHN SMITH </h3>
            <div className="type"> <span>Type:</span>  <span>Forecasting</span></div>
            <div css={stepContainerStyles}>
                <div className="steps">
                    {steps.map(step => {return <div key={step} className={step <=  current? "step current": "step"}> </div>})}
                </div>
                <div className="line"></div>
            </div>
            <div className="user-info"> <Avatar size="large" icon={<UserOutlined />}/> <span className="status">New</span> </div>
        </div>
    );
}

export default SeCard;