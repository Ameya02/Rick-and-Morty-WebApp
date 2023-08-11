import React, { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard';
import { useCharacterContext } from '../context/context';
import { BASE_URL } from '../utils/api';

const Home = () => {
  const [characters, setCharacters] = useState([])
  const { name, gender, status } = useCharacterContext();
  const filters = {
    name: name,
    gender: gender,
    status: status
  }
  const fetchCharacters = async (pageNumber) => {

    try {
      let apiURL = BASE_URL + `/character/?page=${pageNumber}`;

      if (filters.name) apiURL += `&name=${filters.name}`;
      if (filters.gender) apiURL += `&gender=${filters.gender}`;
      if (filters.status) apiURL += `&status=${filters.status}`;
      const response = await fetch(apiURL);
      const data = await response.json();
      setCharacters(data.results);

    } catch (error) {
      console.error('Error fetching characters:', error);
    }
  };
  useEffect(() => {

    // Fetch characters for pages characters from page 1 till 6

    fetchCharacters(1, status);

// eslint-disable-next-line
  }, [name, status, gender]);
  return (
    <>

      {characters ? 
      <div style={{  backgroundColor: "#1F2937"
      }}>{characters.map((character, index) => (
        <CharacterCard key={index} {...character} />
        ))}
      </div>:<div style={{fontSize:"120px", color:"red"}}>No Character Found</div>}
      
    </>
  )
}

export default Home