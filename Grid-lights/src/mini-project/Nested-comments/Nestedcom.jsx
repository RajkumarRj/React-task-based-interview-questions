import React, { useState } from "react";
import Nested from "./Nested";
import useNode from "./useNode";

const comments = {
  id: 1,
  items: [],
};

const Nestedcom = () => {
  const [commentsData, setCommentsData] = useState(comments);
  const { insertNode, editNode, deleteNode } = useNode();
  const handleInsertNode = (folderId, item) => {
    const finalStructure = insertNode(commentsData, folderId, item);
    setCommentsData(finalStructure);
  };

  const handleEditNode = (folderId, value) => {
    const finalStructure = editNode(commentsData, folderId, value);
    setCommentsData(finalStructure);
  };
  const handleDeleteNode = (folderId) => {
    const finalStructure = deleteNode(commentsData, folderId);
    const temp = { ...finalStructure };
    setCommentsData(temp);
  };
  return (
    <div>
      <Nested
        handleInsertNode={handleInsertNode}
        handleDeleteNode={handleDeleteNode}
        handleEditNode={handleEditNode}
        comment={commentsData}
      />
    </div>
  );
};

export default Nestedcom;
