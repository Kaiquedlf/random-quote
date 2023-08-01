import React, { useEffect, useState } from 'react';
import './index.css'
import colors from './colors';


export default function Index(){
    const [quotes, setQuotes] = useState([]);
    const [colorsDatas, setColorsDatas] = useState([]);
    const [number, setNumber] = useState(0);
    
    /* Make calls to api to get a random quote */

    useEffect(() => {

      fetch('https://api.quotable.io/quotes/random')
          .then(res => res.json())
          .then(data => setQuotes(data[0]))
      
          setColorsDatas(colors)

    }, [number]);


    /* Add + 1 to state "number" to re-render the component and make the api call again */
    
    function handleChange(){
      setNumber(nb => nb + 1)
    }

    /* Get a random color from colors.jsx */

  const color = Object.values(colorsDatas);

  const randomColor = color[Math.floor(Math.random() * color.length)]

    
  
    return(
        <div 
        className='page-container' 
        style={{backgroundColor: randomColor, 
                transition: "background-color 0.5s ease-in-out"}}>
            <div 
            className="quote-container">
                <h1 
                className='content-container' 
                style={{color: randomColor, 
                        transition: "0.5s ease-in-out"}}>
                  {quotes.content}
                  </h1>
                <small 
                className='author-container' 
                style={{color: randomColor, 
                        transition: " 0.5s ease-in-out"}}>
                  - {quotes.author}
                  </small>

                <div 
                className="btns">
                    <div 
                    className="btn-links">

                    </div>
                    <button 
                    onClick={handleChange}
                    className='btn-newquote' 
                    style={{backgroundColor: randomColor, 
                            color: "white",
                            transition: "background-color 0.5s ease-in-out"}}>
                      New Quote
                      </button>
                </div>
            </div>
        </div>
    )
}