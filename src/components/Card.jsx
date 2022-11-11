import React from 'react'

/**
 * 
 * @param {Object} img 
 * @param {String} type Type of product
 * @param {String} title Title/Product name
 * @param {String} description Description of product
 * @param {number} originalPrice Original price
 * @param {number} discountedPrice Price with discount
 * @param {boolean} available To make available to add to cart or not
 * @returns 
 */
function Card({img, type, title, description, originalPrice, discountedPrice, available}) {
  return <section className='card'>
    <img src={img} alt="" />
    <div className='product'>
        <h2 className='type'>{type}</h2>
        <h1 className='title'>{title}</h1>
        <p className='description'>{description}</p>

        <div className='price'>
            <h1 className='discounted-price'>{discountedPrice}</h1>
            <h2 className='original-price'>{originalPrice}</h2>
        </div>

        <button
        className='add-to-cart'
        style={{
            backgroundColor: available ? 'green' : 'red'
        }}
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
            </svg>
            
            Add to cart
        </button>
    </div>
  </section>
}

export default Card