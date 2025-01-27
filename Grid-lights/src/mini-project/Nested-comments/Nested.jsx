import React, { useEffect, useRef, useState } from "react";
import "./nested.css";
import Action from "./Action";

const Nested = ({
  comment,
  handleInsertNode,
  handleEditNode,
  handleDeleteNode,
}) => {
  const [inputval, setInputVal] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [showInput, setShowInput] = useState(false);
  const [expand, setExpand] = useState(true);
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef?.current?.focus();
  }, [editMode]);

  const onAddComment = () => {
    if (editMode) {
      handleEditNode(comment.id, inputRef?.current?.innerText);
    } else {
      setExpand(true);
      handleInsertNode(comment.id, inputval);
      setShowInput(false);
      setInputVal("");
    }

    setEditMode(false);
  };
  const handleNewComment = () => {
    setExpand(!expand);
    setShowInput(true);
  };

  const handleDelete = () => {
    handleDeleteNode(comment.id);
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "10px",
      }}
    >
      <div className={comment.id === 1 ? "inputContainer" : "commentContainer"}>
        {comment.id === 1 ? (
          <>
            <input
              type="text"
              className="inputContainer__input first input"
              autoFocus
              value={inputval}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Add comment"
            />

            <Action
              className="reply comment"
              type="Add"
              handleClick={onAddComment}
            />
          </>
        ) : (
          <>
            <span
              contentEditable={editMode}
              suppressContentEditableWarning={editMode}
              ref={inputRef}
              style={{ wordWrap: "break-word" }}
            >
              {comment.name}
            </span>
            <div style={{ display: "flex", marginTop: "5px" }}>
              {editMode ? (
                <>
                  <Action
                    className={"reply"}
                    type={"Save"}
                    handleClick={onAddComment}
                  />
                  <Action
                    className={"reply"}
                    type={"Cancel"}
                    handleClick={() => {
                      if (inputRef.current) {
                        inputRef.current.innerText = comment.name;
                      }
                      setEditMode(false);
                    }}
                  />
                </>
              ) : (
                <>
                  <Action
                    className={"reply"}
                    type={"Reply"}
                    handleClick={handleNewComment}
                  />
                  <Action
                    className={"reply"}
                    type={"Edit"}
                    handleClick={() => setEditMode(true)}
                  />

                  <Action
                    className={"reply"}
                    type={"Delete"}
                    handleClick={handleDelete}
                  />
                </>
              )}
            </div>
          </>
        )}
      </div>
      <div style={{ display: expand ? "block" : "none", paddingLeft: 60 }}>
        {showInput && (
          <div className="inputContainer">
            <input
              type="text"
              className="inputContainer__input"
              autoFocus
              onChange={(e) => setInputVal(e.target.value)}
            />

            <Action
              className={"reply"}
              type={"Reply"}
              handleClick={onAddComment}
            />
            <Action
              className={"reply"}
              type={"Cancel"}
              handleClick={() => setShowInput(false)}
            />
          </div>
        )}
        {comment?.items?.map((cmt) => {
          return (
            <Nested
              key={cmt.id}
              handleInsertNode={handleInsertNode}
              handleDeleteNode={handleDeleteNode}
              handleEditNode={handleEditNode}
              comment={cmt}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Nested;
