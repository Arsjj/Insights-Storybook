import { css } from "@emotion/react";
import SiAvatar from "../../components/Avatar";
import Icon from "../../svg";
import SiBadge from "../../components/Badge";
import { FC } from "react";

const styles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 0 24px;
  background-color: #eff1f5;

  .left-block {
    color: #83848a; //gray-7

    span {
      color: #1c1c20; //gray-9
    }
  }

  .right-block {
    display: flex;
    align-items: center;
    gap: 24px;
    height: 40px;
  }
`;

type Props = {
  name?: string;
  text?: string;
  count?: number;
  src: string;
};

const Header: FC<Props> = ({ name, text, count, src }) => {
  return (
    <div css={styles}>
      <div className="left-block">
        {text} <span>{name}</span>
      </div>
      <div className="right-block">
        <SiBadge color="red" count={count}>
          <Icon name="Bing" size={24} />
        </SiBadge>
        <SiAvatar size="large" src={src} />
      </div>
    </div>
  );
};

export default Header;
