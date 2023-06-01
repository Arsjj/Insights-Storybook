import { FC, useState, useEffect, useRef } from "react";
import { Input, Tag, TagProps, theme } from "antd";
import { CheckableTagProps } from "antd/es/tag";
import { css } from "@emotion/react";
import { PlusOutlined } from "@ant-design/icons";
import type { InputRef } from "antd";
// import { TweenOneGroup } from "rc-tween-one";

const { CheckableTag } = Tag;

type iconPosition = "left" | "right" | "double";

type AddProps = {
  initialTags?: Array<string>;
  getTags?: (value: any) => void;
  getNewAdded?: (value: string) => void;
};

type Props = {
  add?: true;
  checkable?: true;
  iconPosition?: iconPosition;
} & TagProps &
  CheckableTagProps &
  AddProps;

const styles = css`
  width: fit-content;
  padding: 2px 9px;
  border-radius: 16px;
`;

const addTag = css`
  display: flex;
  align-items: center;
  gap: 3px;
  &:hover {
    cursor: pointer;
  }
`;

const addedStyles = css`
  @keyframes tag {
    from {
      opacity: 0.1;
    }
    to {
      opacity: 1;
    }
  }
  padding: 2px 9px;
  border-radius: 16px;
  animation-name: tag;
  animation-duration: 0.8s;
`;

const SiTag: FC<Props> = ({
  add,
  checkable,
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

  const left = iconPosition === "left";
  const right = iconPosition === "right";
  const double = iconPosition === "double";

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
      {checkable ? (
        <CheckableTag css={styles} {...rest}>
          {(left || double) && icon}
          <span>{children}</span>
          {(right || double) && icon}
        </CheckableTag>
      ) : add ? (
        <>
          <div style={{}}>
            {/* <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100,
          }}
          onEnd={(e) => {
            if (e.type === 'appear' || e.type === 'enter') {
              (e.target as any).style = 'display: inline-block';
            }
          }}
          leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
          appear={false}
        > */}
            {tagChild}
            {/* </TweenOneGroup> */}
          </div>
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
              css={css`
              ${styles};
              ${addTag}
            `}
              onClick={showInput}
              {...rest}
            >
              <PlusOutlined /> {children}
            </Tag>
          )}
        </>
      ) : (
        <Tag css={styles} {...rest}>
          {(left || double) && icon}
          <span className="text">{children}</span>
          {(right || double) && icon}
        </Tag>
      )}
    </>
  );
};

export default SiTag;
