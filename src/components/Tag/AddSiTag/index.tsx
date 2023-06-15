import { FC, useState, useEffect, useRef } from "react";
import { Input, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
import { AddSiTagProps } from "../index.d";
import { css } from "@emotion/react";
import { addTag, addedStyles, addedTagsContainerStyles, tagStyles,  } from "../styles";

// import { TweenOneGroup } from "rc-tween-one";





const styles = css`
  width: fit-content;
  padding: 2px 9px;
  border-radius: 16px;
`;


const AddSiTag: FC<AddSiTagProps> = ({
  icon,
  iconPosition = "left",
  initialTags = [],
  getTags,
  getNewAdded,
  children,
  ...rest
}) => {
  const [tags, setTags] = useState(initialTags);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<InputRef>(null);


  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
    if (getTags) {
      getTags(tags);
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
    if (getNewAdded) {
      getNewAdded(inputValue);
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

  return (
    <>
      <div css={addedTagsContainerStyles}>{tagChild}</div>
      {inputVisible ? (
        <Input
          ref={inputRef}
          css={styles}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      ) : (
        <Tag
          css={css`${tagStyles}; ${addTag}`}
          onClick={showInput}
          {...rest}
        >
          <PlusOutlined /> {children}
        </Tag>
      )}
    </>
  );
};

export default AddSiTag;
