import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import booksApi from './apis/booksApi';
import { fetchAsyncBooks, getAllBooks } from './features/booksSlice';
import { useSelector } from 'react-redux';
import BooksList from './components/BooksList';
import Header from './components/Header'



function App() {
const dispatch = useDispatch()

useEffect(()=>{

dispatch(fetchAsyncBooks('JavaScript'))

},[dispatch])


  return (
    <>
  
    <BooksList />
    </>
  );
}

export default App;
