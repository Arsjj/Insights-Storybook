import { FC } from "react";
import { Avatar, AvatarProps } from "antd";
import { css } from "@emotion/react";

const styles = css`
  background: #d3d6de; //gray-5

  .ant-avatar-string {
    color: #4a4a4e; //gray-3
    font-size: 2em;
  }

  .css-mopims-Icon {
    display: block;
    position: relative;
    top: 0.1em;
  }
`;

const SiAvatar: FC<AvatarProps> = ({ ...rest }) => {
  return <Avatar css={styles} {...rest} />;
};

export default SiAvatar;
