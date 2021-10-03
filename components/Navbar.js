import styled from "styled-components";
import Link from 'next/link';
import Image from 'next/image';
import logoPic from '../images/logo.svg';

const Nav = styled.nav`
height: 80px;
color: #a5a5a5;
display: inline-flex;
justify-content: space-between;
align-items: center;
font-size: 18px;
font-family: poppins;
font-weight: 500;
padding: 0 40px 0 40px;
margin: 15px 50px 15px 50px;
width: 92%;
`;
const NavSection = styled.div`
text-align: left;

`
const ButtonSection = styled.div`
display: inline-block;
`

const Button = styled.button`
 display: inline-block;
 margin: 10px;
 padding: 10px 40px 10px 40px;
 font-family: poppins;
font-weight: 400;
border-radius: 50px;
font-size: 18px;
border: none;
background-color: #fff;


&:hover {

        border-radius: 50px;
        font-size: 18px;
        background-color: #5fdcdc;
        color: #fff;
        border: none;
    
  }


`


const StyledLink = styled.a`
padding: 0rem 2rem;
`

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href='/' passHref>
                    <StyledLink>
                    <Image src={logoPic} alt="shortly" />
                    </StyledLink>
                </Link>
            </div>
            <NavSection>
                <Link href='/features' passHref>
                    <StyledLink>
                        Features
                    </StyledLink>
                </Link>
                <Link href='/pricing' passHref>
                    <StyledLink>
                        Pricing
                    </StyledLink>
                </Link>
                <Link href='/resources' passHref>
                    <StyledLink>
                        Resources
                    </StyledLink>
                </Link>
            </NavSection>
            <ButtonSection>
                <Link href='/login' passHref>
                    <Button>
                        Login
                    </Button>
                </Link>
                <Link href='/signup' passHref>
                    <Button>
                        Sign Up
                    </Button>
                </Link>
            </ButtonSection>

        </Nav>
    )
}

export default Navbar;
