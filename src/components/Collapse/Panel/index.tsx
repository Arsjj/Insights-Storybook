import {FC} from "react";
import {Collapse, CollapsePanelProps } from 'antd';

const { Panel } = Collapse;

const SePanel:FC<CollapsePanelProps> = ({...rest }) => {
    return (
        <Panel {...rest}/>
    );
};

export default SePanel;