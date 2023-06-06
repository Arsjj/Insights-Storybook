import { RightOutlined } from "@ant-design/icons";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
// import { css } from "@emotion/react";
import { css } from "@emotion/css";
import "./index.css";

const onChange: DatePickerProps["onChange"] = (date, dateString) => {
  console.log(date, dateString);
};

const styles = css`
  border-radius: 8px;
`;

const SiDatePicker = () => {
  return (
    <Space>
      <DatePicker
        className={css`
          border-radius: 8px;
        `}
        onChange={onChange}
        // style={{ width: "300px" }}
        popupClassName={css`
          .ant-picker-panel-container {
            border-radius: 8px;

            .ant-picker-date-panel {
              /* display: flex; */
              justify-content: center;
              .ant-picker-header {
                .ant-picker-header-super-prev-btn {
                  display: none;
                }
                .ant-picker-header-prev-btn {
                  padding: 0 15px;

                  .ant-picker-prev-icon {
                  }
                }

                .ant-picker-header-next-btn {
                  padding: 0 15px;
                }

                .ant-picker-header-super-next-btn {
                  display: none;
                }
              }
            }

            .ant-picker-body {
              display: flex;
              justify-content: center;

              table {
                .ant-picker-cell-today {
                  /* background-color: green; */
                  border-radius: 50%;
                  .ant-picker-cell-inner::before {
                    border-radius: 50%;
                  }
                }

                .ant-picker-cell-selected.ant-picker-cell {
                  /* background-color: green; */
                  .ant-picker-cell-inner {
                    border-radius: 50%;
                    /* background-color: red; */
                  }
                }
              }
            }
          }
        `}
        // popupClassName="blue"
      />
    </Space>
  );
};

export default SiDatePicker;
