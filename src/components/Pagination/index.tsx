import {FC} from "react";
import { ConfigProvider, PaginationProps, theme } from "antd";
import { css } from "@emotion/react";
import { Pagination } from "antd";


const { darkAlgorithm, defaultAlgorithm } = theme;


const SePagination: FC<PaginationProps> = ({...rest}) => (
  <ConfigProvider
    theme={{
      algorithm: defaultAlgorithm,
      token: {  
        colorBgContainer: "rgba(39, 81, 244, 1)",
        colorPrimary: "rgba(255,255,255,1)",
        colorBgTextHover: "rgba(211, 214, 222, 1)",
      },
    }}
  >
    <Pagination
      css={css`      
        .ant-pagination-item {
          background-color: rgba(239, 241, 245, 1);
        }
        .ant-pagination-prev {
          background-color: rgba(239, 241, 245, 1);
        }
        .ant-pagination-next {
          background-color: rgba(239, 241, 245, 1);
        }
        .ant-pagination-item-active {
          background-color: rgba(39, 81, 244, 1);
        }
        .ant-pagination-item-active:hover {
          background-color: rgba(23, 53, 207, 1);
        }
        .ant-pagination-options-quick-jumper {
          input {
            background-color: rgba(239, 241, 245, 1);
          }
        }        
        .ant-pagination-options{
          div{
            .ant-select-selector{
               background-color: rgba(239, 241, 245, 1);
            }
            .ant-select-dropdown{
               background-color: rgba(239, 241, 245, 1);
                              
               .ant-select-item-option-selected{
               background-color: rgba(239, 241, 245, 1);
               }
            }
          }
        }        
      `}
      {...rest}
    />
  </ConfigProvider>
);

export default SePagination;
