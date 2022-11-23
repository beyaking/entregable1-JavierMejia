import React from 'react'

const QuotesBox = ({quoteRandom, handleClick, colorRandom}) => {

const objStyle = {
    color: colorRandom
}

const objStyleBtn = {
    backgroundColor: colorRandom
  }
   
    return (
        <article className='card' style={objStyle}>
            <i className="fa-solid fa-quote-left card__icon"></i>
            <p className='card__quote'> {quoteRandom.quote}</p>
                <h1 className='card__author'>{quoteRandom.author}</h1>
                <button className='card__btn' onClick={handleClick} style={objStyleBtn}>&gt;</button>
        </article>
    )
}

export default QuotesBox