import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  custom: {
      borderStyle:"solid",
    boxShadow: "none",
    borderColor:"lightgray",
    height:"420px",
    paddingBottom:'10px'
  }
});
const Book = ({handleOpen, image, title, author}) => {
  const classes = useStyles()
    return (
      <Card  className={classes.custom}>
        <CardMedia
        style={{width:"60%", margin:"0 auto", marginTop:"10%"}}
        height={'200px'}
          component="img"
          image= {image}
          alt="books"
        />
        <CardContent style={{borderStyle:"none", paddingBottom:"0px",height:"50px"}}>  
             <Typography gutterBottom variant='h10' component="div" padding={0} margin={0} textAlign={'center'}> 
            <strong>{title} </strong> 
           </Typography> 
      </CardContent> 

      <CardContent style={{borderStyle:"none",height:'50px'}}>  
         <Typography gutterBottom variant='h10' component="div" textAlign={'center'} > 
             Author/s: {author}
           </Typography> 
      </CardContent> 

      <CardActions style={{display:"block", marginBottom:"20px", margin:'0 auto',height:'100px',marginBottom:"10px"}}>
      <Button variant="outlined" style={{width:"98%", margin:'0 auto'}} onClick={handleOpen}>
            Details
          </Button>
          </CardActions>
          
      </Card>
    );
  }

  export default Book;