import styled from "styled-components";
import Link from 'next/link';
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
const GetStarted = () => {
    return (
        <>
                <Link href='/about-us' passHref>
                    <Button>
                        Get Started
                    </Button>
                </Link>
        </>
    )
}

export default GetStarted;
