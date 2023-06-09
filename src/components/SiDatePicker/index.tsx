import { RightOutlined } from "@ant-design/icons";
import type { DatePickerProps } from "antd";
import { DatePicker, Space } from "antd";
// import { css } from "@emotion/react";
import { css } from "@emotion/css";
import "./index.css";
import { useState } from "react";


const styles = css`
  border-radius: 8px;
  `;

const SiDatePicker = () => {
    const [filled, setFilled] = useState(false)
    
    
    
    const onChange: DatePickerProps["onChange"] = (date, dateString) => {
      console.log(date, dateString);
      if(date){
        setFilled(true)    
      } else {
        setFilled(false)
      }
      console.log(filled, 45)
    };
    
  return (
    <div className={
      css`
    .ant-picker-focused{
        border-color: #2751F4  //blue6
    }`}>

      <DatePicker
        onBlur={() => console.log('onBlur')}
        className={css`          
          border-radius: 8px;
          box-shadow: none;
          /* border-color: red; */
          &:hover {
            border-color: #83848A; //gray7
          };
          &::after {
            border-color: red; //primary7
          };
          
          .ant-picker-focused {
            border-color: red; 
            border-radius: 25px;
          }
          
        `}
        onPanelChange={() => console.log(123)}
        onChange={onChange}
        popupClassName={css`
          .ant-picker-panel-container {
            border-radius: 8px;

            .ant-picker-date-panel {
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
    </div>
  );
};

export default SiDatePicker;
