import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import Footer from '../../Components/Footer/Footer';
import Hero from '../../Components/Hero/Hero';
import { MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';

function HomePage(props) {
    return (
        <div>
            <NavBar />
            <MDBContainer>
                <MDBRow className='row-cols-1 row-cols-md-3 g-4'>
                    <MDBCol>
                        <Hero />
                    </MDBCol>
                </MDBRow>
            </MDBContainer>



        </div>
    );
}

export default HomePage;