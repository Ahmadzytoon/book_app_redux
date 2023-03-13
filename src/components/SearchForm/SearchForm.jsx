import React, {useRef, useEffect} from 'react';
import {FaSearch} from "react-icons/fa";
// import { useGlobalContext } from '../../context.';
import "./SearchForm.css";

const SearchForm = ({ sr,setSr}) => {

  const handelChange=(e)=>{
    // console.log(e.target.value)
    setSr(e.target.value)
 }
  return (
    <div className='search-form'>
      <div className='container'>
        <div className='search-form-content'>
            <div className='search-form-elem flex flex-sb bg-white'>
              <input type = "text" className='form-control' placeholder='Search A book ...'  onChange={handelChange}/>
          
            </div>
        
        </div>
      </div>
    </div>
  )
}

export default SearchForm