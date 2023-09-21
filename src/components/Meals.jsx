import React from 'react'
import { useGlobalContext, AppContext, AppProvider } from '../context'
import {BsHandThumbsUp} from 'react-icons/bs'

// const Meals = () => {
//   const {meals}=useGlobalContext();
//   console.log(context);
//   return 

// }
function Meals() {
  const { meals ,loading,selectMeal,addToFavourite} = useGlobalContext();

  if(loading)
  {
     return <section className='section'>
      <h4>Loading...</h4>
     </section> 
  }

  if(meals.length<1)
  {
    return <section className='section'>
      <h4>No meals matched your search item. Please try again</h4>
    </section>
  }

  return (
    <section className='section-center'>
      {
        meals.map((x) => {
          const { idMeal, strMeal: title, strMealThumb: image } = x
          return  <article className='single-meal' key={idMeal}>
              <img src={image} className='img' onClick={()=>selectMeal(idMeal)} />
              <footer>
                <h5>{title}</h5>
                <button className="like-btn" onClick={()=>addToFavourite(idMeal)}>
                <BsHandThumbsUp/>
                </button>
              </footer>
            </article>
        
        })}
    </section>
  )
}

export default Meals
