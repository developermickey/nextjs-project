import styled from "styled-components";
import Link from 'next/link';

const Nav = styled.nav`
height: 80px;
background: #000;
color: #fff;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 25px;
font-family: poppins;
font-weight: 400;
padding: 0 40px 0 40px;
margin: 0;
`;

const StyledLink = styled.a`
padding: 0rem 2rem;
`

const Navbar = () => {
    return (
        <Nav>
            <div>
                <Link href='/' passHref>
                    <StyledLink>
                        Shortly
                    </StyledLink>
                </Link>
            </div>
            <div>
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
            </div>

        </Nav>
    )
}

export default Navbar;
