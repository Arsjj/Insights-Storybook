import { Empty } from 'antd';
import Icon from '../../svg';
import { EmptyProps } from 'antd';
import { FC } from 'react';


const SiEmpty:FC<EmptyProps> = ({...rest}) => (
    <Empty
        image = {<Icon name="Empty"/>}
        description = ""
        {...rest}
    />
);

export default SiEmpty;