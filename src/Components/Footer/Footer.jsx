import React from 'react';
import {
    MDBFooter,
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBIcon,
    MDBBtn
} from 'mdb-react-ui-kit';

function Footer() {
    return (
        <MDBFooter className='bg-dark text-center text-white mt-6'>
            <MDBContainer className='p-4 pb-0'>
                <section className='mb-4'>
                    <MDBBtn outline color="light" floating className='m-1' href='https://www.facebook.com/MiamiHeat/' role='button'>
                        <MDBIcon fab icon='facebook-f' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/MiamiHEAT?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor' role='button'>
                        <MDBIcon fab icon='twitter' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://www.tiktok.com/@miamiheat' role='button'>
                        <MDBIcon fab icon='tiktok' />
                    </MDBBtn>
                    <MDBBtn outline color="light" floating className='m-1' href='https://www.instagram.com/miamiheat/?hl=en' role='button'>
                        <MDBIcon fab icon='instagram' />
                    </MDBBtn>

                    <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/company/miami-heat/' role='button'>
                        <MDBIcon fab icon='linkedin-in' />
                    </MDBBtn>

                </section>
            </MDBContainer>

            <div className='text-center p-3' style={{ backgroundColor: 'rgb(0,0,0)' }}>
                © 2020 Copyright:
                <a className='text-white' href='https://mdbootstrap.com/'>
                    HeatFanatic
                </a>
            </div>
        </MDBFooter>
    );
}

export default Footer;