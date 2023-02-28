import React from 'react';
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
    MDBListGroupItem
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


        <MDBCard>
            <MDBCardImage position='top' alt='...' src='https://mdbootstrap.com/img/new/standard/city/062.webp' />
            <MDBCardBody>
                <MDBCardTitle></MDBCardTitle>
                <MDBCardTitle></MDBCardTitle>
            </MDBCardBody>
            <MDBListGroup flush>
                <MDBListGroupItem>College: </MDBListGroupItem>
                <MDBListGroupItem></MDBListGroupItem>
                <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
            </MDBListGroup>
            <MDBCardBody>
                <MDBCardLink href='#'>Card link</MDBCardLink>
                <MDBCardLink href='#'>Card link</MDBCardLink>
            </MDBCardBody>

        </MDBCard>
    );





}

export default Hero;