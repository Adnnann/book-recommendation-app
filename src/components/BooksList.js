import Book from './Book'
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
import BookDetails from './BookDetails';
import { useState } from 'react';
import Header from './Header';
import RecommendedBook from './RecommendedBook';
import {getAllBooks} from '../features/booksSlice'
import { useSelector } from 'react-redux';

const BooksList = () => {

  const books = useSelector(getAllBooks)

console.log(books)

    const [open, setOpen] = useState(false);
    const [openRecommended, setOpenRecommended] = useState(false);
    const [bookDetails, setBookDetails] = useState({
      publisher: '',
      pageCount: '',
      ratingCount: '',
      averageRating: ''
    })

    const [recommendedBook, setRecommendedBook] = useState({
      bookImage: '',
      bookTitle: '',
      bookAuthor:'',
      pageCount: '',
      bookURL: ''
      
    })

    const handleOpen = (i) => {
      console.log(books)
        setOpen(true);
        setBookDetails({
          publisher: books.items[i].volumeInfo.publisher,
          pageCount: books.items[i].volumeInfo.pageCount,
          ratingCount: books.items[i].volumeInfo.ratingsCount,
          averageRating: books.items[i].volumeInfo.averageRating
        }) 

     
      
      };
      const handleClose = () => {
        setOpen(false);
      };
      const handleOpenRecommended = () => {
        
        setOpenRecommended(true);

        setRecommendedBook({
          bookImage: Array.from(Object.values(books)[0].filter(item=>item.volumeInfo.averageRating === Math.max(item.volumeInfo.averageRating)).sort(function(a,b){
            return b.volumeInfo.averageRating - a.volumeInfo.averageRating
          }))[0].volumeInfo.imageLinks.thumbnail,
          bookTitle: Array.from(Object.values(books)[0].filter(item=>item.volumeInfo.averageRating === Math.max(item.volumeInfo.averageRating)).sort(function(a,b){
            return b.volumeInfo.averageRating - a.volumeInfo.averageRating
          }))[0].volumeInfo.title,
          bookAuthor:Array.from(Object.values(books)[0].filter(item=>item.volumeInfo.averageRating === Math.max(item.volumeInfo.averageRating)).sort(function(a,b){
            return b.volumeInfo.averageRating - a.volumeInfo.averageRating
          }))[0].volumeInfo.authors.map(item=>`${item} `),
          pageCount: Array.from(Object.values(books)[0].filter(item=>item.volumeInfo.averageRating === Math.max(item.volumeInfo.averageRating)).sort(function(a,b){
            return b.volumeInfo.averageRating - a.volumeInfo.averageRating
          }))[0].volumeInfo.pageCount,
          bookURL: Array.from(Object.values(books)[0].filter(item=>item.volumeInfo.averageRating === Math.max(item.volumeInfo.averageRating)).sort(function(a,b){
            return b.volumeInfo.averageRating - a.volumeInfo.averageRating
          }))[0].volumeInfo.previewLink
        })

      };
      const handleCloseRecommended = () => {
        setOpenRecommended(false);
      };
    


    return(
        <>
        <Header handleOpenRecommended={handleOpenRecommended} />
        <Grid
        container
        direction="row"
        spacing={4}
        paddingLeft={2}
        paddingRight={2}
        alignContent={'center'}
        alignItems={'center'}
      >
      {Object.values(books).length > 0 ?
         Object.keys(books).length !== 0 ?
       books.items.map((item, index)=>{
                return (
                  <Grid item xs={12} sm={4} md={4} xl={3} lg={3} key={index}>
                   
                    <Item >
                    
                    <Book 
                      handleOpen={()=>handleOpen(index)}
                      image={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : 'https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg'}
                      title={item.volumeInfo.title ? item.volumeInfo.title : 'N/A'}
                      author={item.volumeInfo.authors ? item.volumeInfo.authors.map(item=>`${item}; `) : 'N/A'}
                    />

                    </Item>
                  </Grid> 
                    ) 
            }) 
            
            : <Grid item xs={12} sm={12} md={12} xl={12} lg={12} justifyContent={'center'}>
                   
                   <Item >
                   <p>Loading...</p>
                   
                   </Item>
                 </Grid>

            :  <Grid item xs={12} sm={12} md={12} xl={12} lg={12} justifyContent={'center'}>
              
              <Item  >
              
              <h2 style={{textAlign:'center'}}>Books with requested search term do not exist. Please try again</h2>
              </Item>
            </Grid>
            
        }
    
        <RecommendedBook openRecommended={openRecommended} 
        handleCloseRecommended={handleCloseRecommended} 
        bookImage={ recommendedBook.bookTitle ? recommendedBook.bookImage : 'https://vinylxpress.com/wp-content/uploads/2017/11/NOT-AVAILABLE-STICKER.jpg'}
        bookTitle={recommendedBook.bookTitle ? recommendedBook.bookTitle : 'N/A' }
        bookAuthor={recommendedBook.bookAuthor ? recommendedBook.bookAuthor : 'N/A' }
        pageCount={recommendedBook.pageCount ? recommendedBook.pageCount : 'N/A'}
        bookReadURL={recommendedBook.bookURL ? recommendedBook.bookURL : 'N/A' }
        />
        <BookDetails open={open} handleClose={handleClose} 
        publisher={bookDetails.publisher ? bookDetails.publisher : 'N/A'} 
        pageCount={bookDetails.pageCount ? bookDetails.pageCount : 'N/A'} 
        averageRating={bookDetails.averageRating ? bookDetails.averageRating : 'N/A'}
        ratingsCount={bookDetails.ratingCount ? bookDetails.ratingCount : 'N/A' }/>
        </Grid>
        </>
    )
}

export default BooksList;