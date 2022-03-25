import { Dialog, DialogContent } from "@mui/material";
import React from "react";

export default function Modal(props) {
  return (
    <>
      <Dialog
        open={props.openModal}
        PaperProps={{ style: { borderRadius: 15 } }}
        onClose={props.handleClose}
        maxWidth="md"
      >
        <DialogContent>{props.children}</DialogContent>
      </Dialog>
    </>
  );
}
