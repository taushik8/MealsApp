import React, { useContext, useEffect,useState } from 'react'

import axios from 'axios'
const allMealsUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s='
const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'

const AppContext = React.createContext();

const AppProvider = ({ children }) => {

    const [meals,setMeals]=useState([]);
    const [loading,setLoading]=useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [showModal,setShowModal]=useState(false); 
    const [selectedMeal,setSelectedMeal]=useState(null);
    const [favaourite,setFavourite]=useState([]);

    //fetch meals function
    const fetchMeals=async(url)=>{
        setLoading(true);
        
        
        const {data}=await axios(url);
        //console.log(data);

        if(data.meals)
        {
            setMeals(data.meals);
        }
        else
        {
            setMeals([]);
        }

        //console.log(data);

        setLoading(false);
    }

    //random meal function
    const fetchRandomMeal=()=>{
        fetchMeals(randomMealUrl);
    }

    // function to choose the meal that we have selected
    //selectedMeal is the selected meal that we want to display
    const selectMeal=(idMeal)=>{
        let x;
        x=meals.find((x)=>x.idMeal===idMeal);

        setSelectedMeal(x);
        setShowModal(true);
    }  

    //funcion to close the modal
    const closeModal=()=>{
        setShowModal(false);
    }

    const addToFavourite=(idMeal)=>{
        // console.log(idMeal)
        const x=meals.find((x)=>x.idMeal===idMeal)
        const found=favaourite.find((x)=>x.idMeal===idMeal)

        if(found) return;

        const updatedFav=[...favaourite,x];
        setFavourite(updatedFav);
        //console.log(favaourite);
    }

    const removeFavourite=(idMeal)=>{
        const updatedFav=favaourite.filter((x)=>x.idMeal!==idMeal)
        setFavourite(updatedFav);
    }

    useEffect(()=>{
        fetchMeals(`${allMealsUrl}${searchTerm}`) 
    },[searchTerm])

  
    return (
        <AppContext.Provider value={{meals,loading,setSearchTerm,fetchRandomMeal,showModal,selectedMeal,selectMeal,closeModal,addToFavourite,removeFavourite,favaourite}}>
            {children}
        </AppContext.Provider>

    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppContext,AppProvider}

