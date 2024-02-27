import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from "react-redux";

import {getByName, getDogs} from "../../redux/actions"

import Navbar from '../../components/navbar/navbar';
import Cards from '../../components/cards/cards';

import './home.css';

function Home() {
  const dispatch = useDispatch();
  const allDogs = useSelector((state)=> state.allDogs);
  const [searchString, setSearchString] = useState ("");

  function handleChange (e) {
     e.preventDefault();
     setSearchString(e.target.value);
     }

     function handleSubmit(e){
       e.preventDefault();
       dispatch(getByName(searchString))
     }

  // const [filtered, setFiltered] = useState (allDogs);
  // const [searchString, setSearchString] = useState ("");

  // function handleChange (e) {
  //   e.preventDefault();
  //   setSearchString(e.target.value);
  // }

  // function handleSubmit(e){
  //   e.preventDefault();
  //   const filtered = allDogs.filter((dog) =>
  //   dog.name.includes(searchString)
  // );
  // setFiltered(filtered);
  // }

useEffect(()=>{
  dispatch(getDogs());
}, [dispatch])

  return (
    <div className="home">
      <h2 className='home-title'>Estoy en la Home</h2>
      <Navbar handleChange={handleChange} handleSubmit={handleSubmit}/>
      <Cards allDogs={allDogs}/>
    </div>
  );
}

export default Home;