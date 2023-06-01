import {FC} from 'react';
import { Calendar } from 'antd';
import {CalendarProps} from "antd";
import type { Dayjs } from 'dayjs';
import type { CalendarMode } from 'antd/es/calendar/generateCalendar';

const SeCalendar:FC <CalendarProps> = ({...rest}) => {
    return <Calendar {...rest}/>;
};

export default SeCalendar;