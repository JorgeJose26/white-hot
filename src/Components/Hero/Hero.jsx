import React from 'react';
import "./Hero.scss"
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from '../../../src/lib/init.firebase'
import {
    MDBCard,
    MDBCardImage,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardLink,
    MDBListGroup,
    MDBListGroupItem,
    MDBCol,
    MDBRow,
    MDBContainer,
    MDBCardGroup

} from 'mdb-react-ui-kit';


function Hero(props) {

    const [players, setPlayers] = useState([]);

    const playersCollectionRef = collection(db, 'players');

    const queryConstraints = [];

    const q = query(playersCollectionRef, ...queryConstraints);

    useEffect(() => {
        console.log(players);
        getPlayers();
    }, [])

    function getPlayers() {
        getDocs(q).then(resp => {
            console.log(resp.docs);
            const gamesData = resp.docs.map(doc => ({ data: doc.data(), id: doc.id }));
            setPlayers(gamesData);

        }).catch(err => console.log(err.message))

    }




    return (


        <div className='card-container'>

            <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                {
                    players.map(players =>

                        <MDBCol>
                            <MDBCard className='h-100'>
                                <MDBCardImage position='top' alt='...' src={players.data.image} />
                                <MDBCardBody>
                                    <MDBCardTitle>{players.data.name}</MDBCardTitle>
                                </MDBCardBody>
                                <MDBListGroup flush>
                                    <MDBListGroupItem>{players.data.position}</MDBListGroupItem>
                                    <MDBListGroupItem>{players.data.height}</MDBListGroupItem>
                                    <MDBListGroupItem>{players.data.weight}</MDBListGroupItem>
                                </MDBListGroup>
                            </MDBCard>
                        </MDBCol>






                    )
                }
            </MDBRow>



        </div>



    );





}

export default Hero;