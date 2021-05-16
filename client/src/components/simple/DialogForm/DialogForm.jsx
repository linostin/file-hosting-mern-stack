import React, { useState } from "react";
import * as S from "./styled";

import Modal from "../Modal";
import Input from "../../ui/Input";
import Button from "../../ui/Button";

const DialogForm = (props) => {
  const { isModal, title, content, footer, modalHandler, createFolderHandler } =
    props;

  const [value, setValue] = useState("");

  const createFolderButtonOnClickHandler = () => {
    createFolderHandler(value);
    modalHandler(false);
    setValue("");
  };

  const closeModal = () => {
    modalHandler(false);
    setValue("");
  };

  return (
    <Modal
      isVisible={isModal}
      title={title}
      content={<Input value={value} onChange={setValue} />}
      footer={
        <Button
          label="Create Folder"
          onClick={createFolderButtonOnClickHandler}
        />
      }
      onClose={closeModal}
    />
  );
};

export default DialogForm;
