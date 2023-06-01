import React from 'react';
import { Empty } from 'antd';
import emptyImg from './Empty.png'


const SeEmpty: React.FC = ({...rest}) => (
    <Empty
        image = {emptyImg}
        {...rest}
    />
);

export default SeEmpty;