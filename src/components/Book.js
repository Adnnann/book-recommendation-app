import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
  custom: {
      borderStyle:"solid",
    boxShadow: "none",
    borderColor:"lightgray",
  }
});
const Book = ({handleOpen, image, title, author}) => {
  const classes = useStyles()
    return (
      <Card  className={classes.custom} >
        <CardMedia
        style={{width:"60%", margin:"0 auto", marginTop:"10%"}}
        height={200}
          component="img"
          image= {image}
          alt="books"
        />
        <CardContent style={{borderStyle:"none", paddingBottom:"0px"}}>  
             <Typography gutterBottom variant='h10' component="div" padding={0} margin={0} textAlign={'center'} > 
             {title} 
           </Typography> 
      </CardContent> 

      <CardContent style={{borderStyle:"none"}}>  
         <Typography gutterBottom variant='h10' component="div" padding={0} margin={0} textAlign={'center'} > 
             Author/s: {author}
           </Typography> 
      </CardContent> 

      <CardContent style={{borderStyle:"none"}}>  
        <Typography gutterBottom variant='h10' component="div" padding={0} margin={0} textAlign={'center'}  > 
           <Button variant="outlined" style={{width:"100%", marginBottom:"0"}} onClick={handleOpen}>
            Details
          </Button>
        </Typography> 
      </CardContent> 

      </Card>
    );
  }

  export default Book;