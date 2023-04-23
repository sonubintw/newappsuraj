import React from 'react'
import {Link} from "react-router-dom"

const NewItem=(props)=> {
  return (
        <div>
           <div className='border-2 rounded-md shadow-md pb-16 flex flex-col text-left items-center'>
              <img style={{height:"250px"}} src={props.imageUrl} alt='img'/>
              <span className='border-spacing-4 m-4 font-bold'>{props.title}</span>
              <span className='border-spacing-4 m-4 '>{props.description}</span>
              {/* <a target="_blank" href={props.newsUrl}>
              <button  className="bg-black hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">readMore</button>
               </a> */}
               <Link to={props.newsUrl} target='_blank'>
               <button  className="bg-black hover:bg-gray-400 text-white font-bold py-2 px-4 rounded">readMore</button>
               </Link>
           </div>
        </div>
  )
}

export default NewItem


