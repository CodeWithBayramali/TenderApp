import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import axios from "axios";

const OfferList = ({ op, setOpen, ofer }) => {
  

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  };

  return (
    <Modal
      open={op}
      onClose={() => setOpen(false)}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="d-flex flex-column scrol" style={{ overflowY: "scroll" }}>
          {ofer.map((of) => {
              return(
                  <div className="d-flex my-3 mx-2 justify-content-between">
                <div>
                <span>{of.userName}</span>
              </div>
              <div>
                  <span>{of.offer} $</span>
              </div>
              </div>
              )
            
          })}
        </div>
      </Box>
    </Modal>
  );
};

export default OfferList;
