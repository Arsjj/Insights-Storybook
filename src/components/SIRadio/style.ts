import { css } from "@emotion/react";

export const radio = css`
  &.ant-radio-wrapper {
    color: #83848a;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    letter-spacing: 0.02em;

    & .ant-radio-inner {
      transition: none !important;
    }

    &:not(.ant-radio-wrapper-disabled) {
      &:hover {
        color: #4a4a4e;

        & .ant-radio-checked .ant-radio-inner {
          border-color: #527aff;

          &::after {
            background-color: #527aff;
          }
        }
      }

      & .ant-radio-checked .ant-radio-inner {
        background-color: #ffffff00;

        &::after {
          background-color: #2751f4;
          transition: none;
        }
      }
    }

    &.ant-radio-wrapper-disabled {
      color: #d3d6de;
    }
  }

  & .ant-radio-disabled .ant-radio-inner {
    background-color: #eff0f3;
  }

  &.ant-radio-wrapper .ant-radio-disabled.ant-radio-checked .ant-radio-inner::after {
    transform: scale(0.5);
  }
`;

export const group = css`
  &.ant-radio-group.ant-radio-group-solid {
    &.ant-radio-button-wrapper:not(.ant-radio-button-wrapper-disabled) {
      color: #4a4a4e;
      border-color: #d9d9d9;

      :first-child {
        border-start-start-radius: 8px;
        border-end-start-radius: 8px;
        border-inline-start: 1px solid #d9d9d9;
      }

      :last-child {
        border-start-end-radius: 8px;
        border-end-end-radius: 8px;
      }

      &:hover {
        color: #527aff;
      }

      &:active {
        color: #2751f4;
      }
    }

    &.ant-radio-button-wrapper-disabled {
      color: #b6b9c2;
      background-color: #eff0f3;
    }

    &.ant-radio-button-wrapper-checked {
      color: #ffffff !important;

      :not() &:not(.ant-radio-button-wrapper-disabled) {
        border-color: #2751f4 !important;
        &:hover {
          background: #527aff;
          border-color: #527aff !important;
        }

        &:first-child {
          border-inline-start: 1px solid #527aff;
        }

        &:last-child {
          border-inline-end: 1px solid #527aff;
        }
      }

      &:not(.ant-radio-button-wrapper-disabled):active {
        background-color: #1735cf;
        border-color: #1735cf !important;
      }
    }

    &.ant-radio-button-wrapper-disabled {
      border-color: #e5e7ed;

      &:not(:first-child)::before {
        background-color: #e5e7ed;
      }

      &.ant-radio-button-wrapper-checked {
        background-color: #e5e7ed;
      }
    }
  }

  &.ant-radio-group.ant-radio-group-outline {
    & .ant-radio-button-wrapper:not(.ant-radio-button-wrapper-disabled) {
      border-color: #e5e7ed;

      :not(:first-child, .ant-radio-button-wrapper-checked)::before {
        background-color: #e5e7ed;
      }

      :hover {
        color: #527aff;
      }

      :active {
        color: #2751f4;
      }

      &.ant-radio-button-wrapper-checked {
        color: #2751f4;
        border-color: #2751f4;

        &:hover {
          color: #527aff;
          border-color: #527aff;
          :not(:first-child)::before {
            background-color: #527aff;
          }
        }

        &:active {
          color: #1735cf;
          border-color: #1735cf;
          :not(:first-child)::before {
            background-color: #1735cf;
          }
        }
      }
    }

    & .ant-radio-button-wrapper-disabled {
      color: #b6b9c2;
      background-color: #eff0f3;
      border-color: #eff0f3;
      :not(:first-child)::before {
        background-color: #eff0f3;
      }

      &.ant-radio-button-wrapper-checked {
        color: #ffffff;
        background-color: #e5e7ed;
        border-color: #e5e7ed;
      }
    }
  }
`;
