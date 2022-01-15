

import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button'
import {createPortal} from 'react-dom'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


const BooksDetails = ({handleClose,open, publisher, pageCount, averageRating, ratingsCount }) => {

 return createPortal(
    <React.Fragment>
      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
 
          <p id="child-modal-description">
            Publisher: {publisher.includes('\"') ? `${publisher}` : `\"${publisher}\"`}
          </p>
          <p id="child-modal-description">
            Page Count: {`${pageCount}`}
          </p>
          <p id="child-modal-description">
            Average Rating: {`${averageRating}`}
          </p>
          <p id="child-modal-description">
            Ratings Count: {`${ratingsCount}`}
          </p>
          <Button onClick={handleClose} style={{width:"100%", textAlign:"center"}}>Close</Button>
        </Box>
      </Modal>
    </React.Fragment>, document.getElementById('rootModal')
  )
  
}
export default BooksDetails;
