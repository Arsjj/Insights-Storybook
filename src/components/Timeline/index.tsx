import { Timeline, TimelineProps } from "antd";
import { FC } from "react";

const items = [
  {
    label: "2015-09-01",
    children: "Create a services",
  },
  {
    label: "2015-09-01 09:12:11",
    children: "Solve initial network problems",
  },
  {
    children: "Technical testing",
  },
  {
    label: "2015-09-01 09:12:11",
    children: "Network problems being solved",
  },
];

const SeTimeline: FC<TimelineProps> = ({ ...rest }) => {
  return <Timeline {...rest} />;
};

export default SeTimeline;
