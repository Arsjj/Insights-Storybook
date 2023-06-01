import {Badge} from "antd";
import {FC} from "react";
import {Props} from "./index.d";



const SeBadge: FC<Props> = ({statusType = "default",  ...rest}) => {
    const colors:any = {
        success : "#219653",
        warning: "#F2994A",
        danger: "#F5222D",
        default: "#D3D6DE",
        processing: "#527AFF"
    }

    return(
        <Badge color={colors[statusType]} {...rest}/>
    )};

export default SeBadge;
