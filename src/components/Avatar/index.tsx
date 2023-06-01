import { UserOutlined } from '@ant-design/icons';
import {Avatar, AvatarProps, Space} from 'antd';
import {FC} from 'react';

const SeAvatar:FC<AvatarProps> = ({...rest}) => {
    return <Avatar {...rest}></Avatar>
};

export default SeAvatar;