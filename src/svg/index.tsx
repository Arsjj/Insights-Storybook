import { FC, FunctionComponent, PropsWithChildren } from "react";
import { css } from "@emotion/react";
import Plus from "./Plus";
import StarTwoTone from "./Star";
import Team from "./Team/index.";
import Cube from "./Cube";
import Setting from "./Setting";
import MessageQuestion from "./MessageQuestion";
import TwoToneProfile from "./TwoToneProfile";
import Logo from "./Sentium";
import Empty from "./Empty";
import SiBackground from "./Background";
// type RFC<P = {}> = FunctionComponent<PropsWithChildren<P>>;

interface Props {
  name: IconNames;
  color?: string;
  size?: number;
  className?: string;
}

export type Icons = {
  [key in IconNames]: (props?: any) => JSX.Element;
};

// export const withColor = (Component: ReactComponentElement) => (color: string) =>
//   <Component color={color} />;

const Icon: FC<Props> = ({
  name,
  color = "currentColor",
  size = 24,
  className,
}) => {
  return (
    <div className={className} css={iconStyle}>
      {icons[name](color, size)}
    </div>
  );
};

const icons = {
  plus: (color: string, size: number) => <Plus color={color} size={size} />,
  StarTwoTone: (color: string, size: number) => <StarTwoTone color={color} size={size} />,
  Team: (color: string, size: number) => <Team color={color} size={size} />,
  Cube: (color: string, size: number) => <Cube color={color} size={size} />,
  Setting: (color: string, size: number) => <Setting color={color} size={size} />,
  MessageQuestion: (color: string, size: number) => <MessageQuestion color={color} size={size} />,
  TwoToneProfile: (color: string, size: number) => <TwoToneProfile color={color} size={size}/>,
  SentiumLogo: () => <Logo/>,
  Empty: () => <Empty/>,
  SiBackGround: () => <SiBackground />
};

const iconStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Icon;

export type IconNames = keyof typeof icons;
