import React from 'react'
import { useGlobalContext } from '../context'
function Favourites()
{
    
    const {favaourite,removeFavourite}=useGlobalContext();
    return(
        <section className='favorites'>
            <div className='favorites-content'>
                 <h5>Favorite Foods</h5>
                 <div className='favorites-container'>
                    {
                        favaourite.map((x)=>{
                            console.log(x);
                            const{idMeal,strMealThumb:image}=x;
                            return <div key={idMeal} className='favorites-item'>
                                <img src={image} className='favorites-img img'/>
                                <button className='remove-btn' onClick={()=>removeFavourite(idMeal)}>
                                    Remove
                                </button>
                            </div>
                        })
                    }
                 </div>
            </div>
        </section>
    )
} 

export default Favourites
