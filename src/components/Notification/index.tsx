import { useRef } from "react";
import { notification } from "antd";
import {
  CheckCircleTwoTone,
  CloseCircleTwoTone,
  InfoCircleTwoTone,
} from "@ant-design/icons";
import {SiNotificationProps} from "./index.d"

import { css } from "@emotion/react";

const { useNotification } = notification;


const styles = css`
  svg {
    path:nth-child(2) {
      fill: transparent;
    }
  }
`;


const useSiNotification = () => {
  const notificationContainerRef = useRef<HTMLDivElement>(null);
  const [api, contextHolder] = useNotification({
    getContainer: () => notificationContainerRef.current as HTMLDivElement,
  });

  const icons = {
    success: <CheckCircleTwoTone twoToneColor="#219653" />,
    info: <InfoCircleTwoTone twoToneColor="#527AFF" />,
    warning: <InfoCircleTwoTone twoToneColor="#F2994A" />,
    error: <CloseCircleTwoTone twoToneColor="#EB5757" />,
  };

  const openNotification = ({type, ...args}:SiNotificationProps): void => {
    if (type) {
      api[type]({
        ...args,
        icon: icons[type],
      });
    } else {
      api.open({
        ...args,
      });
    }
  };

  return {
    openNotification: openNotification,
    notificationContext: (
      <div ref={notificationContainerRef} css={styles}>
        {contextHolder}
      </div>
    ),
  };
};

export default useSiNotification;
