import {FC} from "react";
import {Collapse, CollapsePanelProps } from 'antd';

const { Panel } = Collapse;

const SiPanel:FC<CollapsePanelProps> = ({...rest }) => {
    return (
        <Panel {...rest}/>
    );
};

export default SiPanel;