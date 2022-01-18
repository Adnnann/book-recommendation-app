import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import { width } from '@mui/system';
import { fetchAsyncBooks } from '../features/booksSlice';
import { useDispatch } from 'react-redux';

const Header = ({handleOpenRecommended}) => {

  const dispatch = useDispatch()
  const getRecommendedBook = () => {
      const query = document.getElementById('bookSelector').value
      const lettersAndNumbers = /^[A-Za-z0-9 _]*[A-Za-z]+[A-Za-z0-9 _]*$/
      if(query.match(lettersAndNumbers)){
        dispatch(fetchAsyncBooks(query))
        document.getElementById('bookSelector').value = ""
      }else{
        alert('Only letters and numbers are allowed')
        document.getElementById('bookSelector').value = ""
      }
    }


    return(
        <>
        <Box textAlign={'center'} style={{borderStyle:"solid", width:"97%", margin:"0 auto", borderColor:"lightgray", borderWidth:"0.2px"}}>
        <h1>Books Recomender</h1>
        <h3>Which one should you read?</h3>
        </Box>
  
        <Grid
        container
        direction="row"
        alignContent={'center'}
        alignItems={'center'}
        marginLeft={'2%'}
      >
  
        <Grid item xs={9} sm={11} md={11} xl={11} lg={11}>
          <Item style={{display:"inline"}}>
            <TextField style={{width:"100%",marginBottom:"0.5%", marginTop:'0.5%'}} id="bookSelector"/>
          </Item>
        </Grid>

        <Grid item xs={1} sm={1} md={1} xl={1} lg={1} > 
          <Item style={{display:"inline"}}> 
            <Button type="submit" variant="outlined" style={{paddingTop:'0', marginLeft:'1%'}}>
            <SearchIcon color='primary' style={{height:"50px",width:"100%",marginTop:'0'}} onClick={getRecommendedBook}/></Button>
          </Item>
        </Grid>
      
        <Grid item xs={11} sm={12} md={11} xl={11} lg={11}> 
          <Item> 
            <Button variant="outlined"  style={{height:"42px",width:"100%", marginBottom:"0.5%"}} onClick={handleOpenRecommended}>Recommended</Button>
          </Item>
        </Grid>
        
        </Grid>
        
       
        </>
    )
}

export default Header