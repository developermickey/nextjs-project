import styled from "styled-components";
import Link from 'next/link';
import Image from 'next/image';
import heroPic from '../images/illustration-working.svg';
import GetStarted from "./GetStarted";

const Section = styled.div`
height: 90vh;
display: flex;
background: #fff;
width: 100%;
padding: 30px;
`
const RowLeft = styled.div`
width: 50%;
padding-left: 100px;
padding-top: 30px;
text-align: left;
`
const RowRight= styled.div`
width: 50%;
padding-left: 200px;
padding-top: 30px;
`
const Heading = styled.h1`
color: #000;
font-size: 5rem;
line-height: 6rem;
font-weight: 700;
font-family: 'Poppins', sans-serif;;
text-align: left;
`
const P = styled.p`
color: #a5a5a5;
font-size: 1.3rem;
font-weight: 500;
font-family: 'Poppins', sans-serif;;
text-align: left;
padding-right: 100px;
margin-top: -50px;
`

const Button = styled.button`
margin-top: 10px;
padding: 10px 30px 10px 30px;
font-family: poppins;
font-weight: 400;
border-radius: 50px;
font-size: 18px;
background-color: #5fdcdc;
color: #fff;
text-align: left;
border: none;

`


const HeroSection = () => {
    return (
        <>
        <Section>
            <RowLeft>
                <Heading>More than just shorter links</Heading>
                <P>Build your brand's recognition and get detailed insights on how your links are performing.</P>
    
                <GetStarted />
            </RowLeft>
            <RowRight>
            <Image src={heroPic} alt="Picture of the author" />
            </RowRight>
        </Section>
        </>
    )
}

export default HeroSection;
