import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button'
import {createPortal} from 'react-dom'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  custom: {
      borderStyle:"solid",
    boxShadow: "none",
    borderColor:"lightgray",
  }
});
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'rgba(0, 0, 0, 0.7)',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

function RecommendedBook ({handleCloseRecommended,openRecommended, bookImage, bookTitle, bookAuthor, pageCount, bookReadURL}) {
    const classes = useStyles()


 return createPortal(
    <React.Fragment>
      <Modal
        hideBackdrop
        open={openRecommended}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
        
      >

        <Box sx={{ ...style, width: 400}} style={{width:"100%", height:"100%"}}>
        
        <Card  className={classes.custom}  style={{margin:"0 auto", marginTop:'10%'}} sx={{width:300}} >
            
            <CardContent style={{borderStyle:"none", paddingBottom:"0px", width:"100%"}} >  
                <Typography gutterBottom variant='h10' component="div" padding={0} marginBottom={2} marginLeft={'16%'} > 
               Recommended book is
                </Typography> 
            </CardContent> 
       
            <CardMedia
            style={{width:"60%", margin:"0 auto", marginTop:"10%"}}
            height="200px"
            component="img"
            image= {bookImage}
            alt="green iguana"
            />

            <CardContent style={{borderStyle:"none", paddingBottom:"0px"}}>  
                <Typography gutterBottom variant='h10' component="div" padding={0} margin={0} textAlign={'center'} color={'blue'} fontSize={'20px'} fontWeight={'bold'}> 
                    {bookTitle}
                </Typography> 
            </CardContent> 

            <CardContent style={{borderStyle:"none", paddingTop:"3px",paddingBottom:"0"}}>  
                <Typography gutterBottom variant='h10' component="div" padding={0} margin={0} textAlign={'center'} > 
                    {bookAuthor}
                </Typography> 
            </CardContent> 

            <CardContent style={{borderStyle:"none", paddingTop:"0",paddingBottom:'2px'}}>  
                <Typography gutterBottom variant='h10' component="div" padding={0} marginTop={0} textAlign={'center'} > 
                    Page Count: {pageCount}
                </Typography> 
            </CardContent> 

            <CardContent style={{borderStyle:"none"}}>  
                <Typography gutterBottom variant='h10' component="div" padding={0} margin={0} textAlign={'center'} > 
                    <a href={bookReadURL} style={{textDecoration:"none"}}>Read book online</a>
                </Typography> 
            </CardContent> 

            <CardContent style={{borderStyle:"none"}}>  
                <Typography gutterBottom variant='h10' component="div" padding={0} margin={0} textAlign={'center'}  > 
                    <Button variant="outlined" style={{width:"100%", marginBottom:"0"}} onClick={handleCloseRecommended}>Close</Button>
                </Typography> 
            </CardContent> 
       
        </Card>
        </Box>
      </Modal>
    </React.Fragment>, document.getElementById('rootRecommended')
  )
  
}
export default RecommendedBook;
