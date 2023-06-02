import {FC} from "react";
import {Collapse, CollapseProps} from 'antd';
import SiPanel from "./Panel/index";
import {css} from "@emotion/react";


const styles = css`
  .ant-collapse-item {
    margin-bottom: 1px;
    border-radius: 8px;
    background: rgba(239, 241, 245, 1);
  }
  .ant-collapse-content {
    background: rgba(239, 241, 245, 1);
  }
`

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const SiCollapse:FC<CollapseProps> = ({...rest}) => {
    return (
        <Collapse
            css={styles}
            {...rest}
        >
            
        </Collapse>
    );
};

export default SiCollapse;