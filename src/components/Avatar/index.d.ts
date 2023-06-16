import type { ForwardRefExoticComponent, RefAttributes } from "react";
import { AvatarProps } from "antd";
import Group from "antd/es/avatar";

export declare type CompoundedComponent = ForwardRefExoticComponent<
  AvatarProps & RefAttributes<HTMLSpanElement>
> & {
  Group: typeof Group;
};


// export { Group };
// type CompoundedComponent = ForwardRefExoticComponent<AvatarProps & RefAttributes<HTMLSpanElement>> & {
//     Group: typeof Group;
// };
// declare const Avatar: CompoundedComponent;
// export default Avatar;
