import { FC, FunctionComponent, PropsWithChildren } from "react";
import { css } from "@emotion/react";
import Plus from "./Plus";
import StarTwoTone from "./Star";
import Team from "./Team/index.";
import Cube from "./Cube";
import Setting from "./Setting";
import MessageQuestion from "./MessageQuestion";
import Logo from "./Sentium";
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
  StarTwoTone: () => <StarTwoTone color="black" size={20} />,
  Team: () => <Team color="black" size={20} />,
  Cube: () => <Cube color="black" size={20} />,
  Setting: () => <Setting color="black" size={20} />,
  MessageQuestion: () => <MessageQuestion color="black" size={20} />,
  SentiumLogo: () => <Logo />,
};

const iconStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Icon;

export type IconNames = keyof typeof icons;
