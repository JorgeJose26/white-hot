import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';

function Hero(props) {

    const [teams, setTeams] = useState([])

    const options = {
        method: 'GET',
        url: 'https://api-basketball.p.rapidapi.com/teams',
        params: { league: '12', season: '2021-2022' },
        headers: {
            'X-RapidAPI-Key': 'ea0ebde8a3mshbc272f6dcb6a7eap1c3c48jsn1f8876f846df',
            'X-RapidAPI-Host': 'api-basketball.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetchData();


    }, [])


    const fetchData = () => {

        axios.request(options).then(function (response) {


            console.log(response.data.response);
            setTeams(response.data.response[15]);
            console.log(teams);

        }).catch(function (error) {
            console.error(error);
        });

    }





    return (
        <div>

        </div>
    );
}

export default Hero;