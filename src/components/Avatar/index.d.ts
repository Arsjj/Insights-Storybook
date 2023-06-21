import { AvatarProps } from "antd";
import { AvatarSize } from "antd/es/avatar/SizeContext";

export interface SiAvatarProps extends Omit<AvatarProps, "size"> {
  size?: AvatarSize | "medium";
}


// export { Group };
// type CompoundedComponent = ForwardRefExoticComponent<AvatarProps & RefAttributes<HTMLSpanElement>> & {
//     Group: typeof Group;
// };
// declare const Avatar: CompoundedComponent;
// export default Avatar;
