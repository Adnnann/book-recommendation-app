import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import booksApi from '../apis/booksApi'

const KEY = process.env.REACT_APP_GOOGLE_BOOKS_API_KEY

export const fetchAsyncBooks = createAsyncThunk('books/fetchAsyncBooks', async (q) =>{
  
    const response = await booksApi.get(`volumes?q=${q}&key=${KEY}&fields=items(volumeInfo)`)
    .catch(err=>console.log('err', err))
    return response.data
    })
const initialState = {
    books: {}
}

export const booksSlice = createSlice({
    name: 'books',
    initialState,
    extraReducers:{
        [fetchAsyncBooks.pending]:()=> {
            console.log('pending')
        },
        [fetchAsyncBooks.fulfilled]:(state, {payload})=> {
            return {...state, books:payload}
        },
        [fetchAsyncBooks.rejected]:()=> {
            console.log('rejected')
        },
       

    }
})

export const getAllBooks = (state) => state.books.books;
export default booksSlice.reducer
