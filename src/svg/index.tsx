import { FC, FunctionComponent, PropsWithChildren } from 'react';
import { css } from '@emotion/react';
import Plus from './Plus';

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
  color = 'currentColor',
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
};

const iconStyle = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default Icon;

export type IconNames = keyof typeof icons;
