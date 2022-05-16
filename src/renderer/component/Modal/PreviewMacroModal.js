import React from "react";
import ReactDom from "react-dom";
import { RegularButton } from "../Button";
import { IconEye } from "../Icon";
import Modal from "react-bootstrap/Modal";

import i18n from "../../i18n";

export default function PreviewMacroModal({ children }) {
  const [show, setShow] = React.useState(false);

  const toogleShow = event => {
    setShow(!show);
  };

  return ReactDom.createPortal(
    <>
      <RegularButton
        buttonText="Preview macro"
        size="sm"
        icoSVG={<IconEye />}
        style="outline-sm"
        icoPosition="right"
        onClick={() => setShow(!show)}
      />
      <Modal size="lg" show={show} onHide={toogleShow} aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Header closeButton>
          <Modal.Title>Preview macro</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
      </Modal>
    </>,
    document.getElementById("portalPreviewMacroModal")
  );
}
