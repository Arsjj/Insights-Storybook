import { useState, useEffect, useRef } from "react";
import { Input, Tag } from "antd";
import type { InputRef } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { AddSiTagProps } from "..";
import { css } from "@emotion/react";
import {
  addTag,
  addedStyles,
  addedTagsContainerStyles,
  tagStyles,
  inputStyles,
} from "../styles";

const styles = css`
  width: fit-content;
  padding: 2px 9px;
  border-radius: 16px;
`;

export const useAddSiTag = (initialTags: Array<string>) => {
  const [tags=[], setTags] = useState(initialTags);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<InputRef>(null);

  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag: any) => tag !== removedTag);
    setTags(newTags);
    console.log(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue("");
  };

  const forMap = (tag: string) => {
    const tagElem = (
      <Tag
        css={styles}
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} css={addedStyles}>
        {tagElem}
      </span>
    );
  };

  const tagChild = tags.map(forMap);

  return {
    addSiTag: ({
      tagProps: { children, ...tagProps },
      // inputProps: { ...inputProps },
    }: AddSiTagProps) => (
      <>
        {inputVisible ? (
          <Input
            ref={inputRef}
            css={inputStyles}
            type="text"
            style={{ width: 78 }}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputConfirm}
            onPressEnter={handleInputConfirm}
            // {...inputProps}
          />
        ) : (
          <Tag
            css={css`
              ${tagStyles};
              ${addTag}
            `}
            onClick={showInput}
            {...tagProps}
          >
            <PlusOutlined /> {children}
          </Tag>
        )}
      </>
    ),
    addedSiTags: <div css={addedTagsContainerStyles}>{tagChild}</div>,
    siTags: tags,
  };
};

export default useAddSiTag;
