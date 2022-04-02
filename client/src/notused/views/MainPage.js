import React, {useState, useEffect} from 'react';
// import {} from 'react-router-dom';
import axios from 'axios';
import Header from './Header'; 
import ListPlayer from '../components/AllPlayers';

const Main = () => {

    const [playerList, setPlayerList] = useState([]);
    

    useEffect(() => {
        axios.get('http://localhost:8000/players/list')
            .then(res => setPlayerList(res.data));
    }, [])
    
    return (
        <div>
            <Header />
            <ListPlayer />
        </div>
    )
}

export default Main;