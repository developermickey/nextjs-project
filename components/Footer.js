import styled from "styled-components";

const FooterSection = styled.div`
 background: #000;
 color: #fff;
 height: 100px;
 display: flex;
 justify-content: center;
 align-items: center;
 font-size: 30px;
 font-family: poppins;
 font-weight: 700;
 

`

const Footer = () => {
    return (
        <FooterSection>
            <p>Shortly</p>
        </FooterSection>
    )
}

export default Footer;
