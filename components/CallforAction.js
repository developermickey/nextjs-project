import styled from "styled-components";
import Link from 'next/link';
import Image from 'next/image';
import imgUrl from '../images/bg-boost-desktop.svg';

import GetStarted from "./GetStarted";


const Wrapper = styled.div`
text-align: center;
padding: 50px 30px 50px 30px;
background-color: #000;
width: 100%;
`

const Heading = styled.h2`
text-align: center;
font-size: 3rem;
color: #fff;
font-family: poppins;
font-weight: 700;
`

const CallforAction = () => {
    return (
        <> 

            <Wrapper imgUrl={imgUrl}>
            
                <Heading>Boost your links today</Heading>
                <GetStarted />
            </Wrapper>
        </>
    )
}

export default CallforAction;
