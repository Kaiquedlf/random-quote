import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './index.css'
import colors from './colors';


export default function Index(){
    const [quotes, setQuotes] = useState([]);
    const [colorsDatas, setColorsDatas] = useState([]);
    

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.quotable.io/quotes/random');
        setQuotes(response.data[0]);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
    setColorsDatas(colors)
  }, []);
  

  const color = Object.values(colorsDatas);

  const randomColor = color[Math.floor(Math.random() * color.length)]

    const style = {
        color: randomColor
    }
  
    return(
        <div className='page-container' style={{backgroundColor: randomColor}}>
            <div className="quote-container">
                <h1 className='content-container' style={style}>{quotes.content}</h1>
                <small className='author-container' style={style}>- {quotes.author}</small>

                <div className="btns">
                    <div className="btn-links"></div>
                    <button className='btn-newquote' style={{backgroundColor: randomColor, color: "white"}}>New Quote</button>
                </div>
            </div>
        </div>
    )
}