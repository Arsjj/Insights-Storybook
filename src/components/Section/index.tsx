import { css } from "@emotion/react";
import imgUrl from "./sectionImg.png";
import { FC } from "react";

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

  h1 {
    margin: 0;
  }
  .text {
    color: #4a4a4e; //gray-4
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px 12px;
    gap: 8px;
    background: #eff1f5; //gray-2
    border: 1px solid #d3d6de; // gray-5
    border-radius: 8px;
    
  }

  img {
    width: 260px;
  }
  .user-id {
    margin-top: 20px;
    font-size: 13px;
  }
  p {
    font-size: 12px;
    color: #b6b9c2;
    margin: 0;
  }
  button {
    background-color: #2751f4;
    color: rgba(255, 255, 255, 1);
    padding: 8px 16px;
    border-radius: 100px;
    border: none;
    cursor: pointer;
  }
`;

type Props = {
  userId?: string | number;
  text: string;
  onClick?: () => void;
};

const Section: FC<Props> = ({ userId, onClick, text }) => {
  return (
    <div css={styles}>
      <img src={imgUrl} />
      <h1>Thank you for choosing Sentium Insights</h1>
      <span className="user-id">Your User ID</span>
      <div className="text">{text}</div>
      <button onClick={onClick}>Start</button>
      <p>Manage your subscription</p>
    </div>
  );
};

export default Section;
