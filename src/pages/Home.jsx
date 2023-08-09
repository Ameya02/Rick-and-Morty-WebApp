import React, { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard';
import { useCharacterContext } from '../context/context';
import { BASE_URL } from '../utils/api';





const Home = () => {
    const [characters, setCharacters] = useState([])
    const {name,gender,status} = useCharacterContext();
    const filters = {
      name: name,
      gender: gender,
      status: status
    }
    const fetchCharacters = async (pageNumber) => {

        try {
            let apiURL= BASE_URL+`/character/?page=${pageNumber}`;
            console.log(apiURL)

            if (filters.name) apiURL += `&name=${filters.name}`;
            if (filters.gender) apiURL += `&gender=${filters.gender}`;
            if (filters.status) apiURL += `&status=${filters.status}`;
            const response = await fetch(apiURL);
            const data = await response.json();
            console.log(data.results)
            setCharacters(data.results);
          
        } catch (error) {
          console.error('Error fetching characters:', error);
        }
      };
    useEffect(() => {
    
        // Fetch characters for pages characters from page 1 till 6
        
        fetchCharacters(1,status);
    
    
      }, [name,status,gender]);
  return (
   <>
   
   {characters && characters.map((character,index)=> (
 <CharacterCard key={index} {...character} />
   )) }
   </>
  )
}

export default Home