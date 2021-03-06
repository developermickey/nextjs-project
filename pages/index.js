import Head from 'next/head'
import styled from 'styled-components'
import CallforAction from '../components/CallforAction'
import HeroSection from '../components/HeroSection'

const Hero = styled.div`
height: 90vh;
display: flex;
justify-content: center;
text-align: center;
background: #fff;
`

const Heading = styled.h1`
color: #000;
font-size: 10rem;
font-weight: 900;
`

export default function Home() {
  return (
    <div>
      <Head>
        <title>Shortly</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,500;0,700;1,500;1,700&display=swap" rel="stylesheet"></link>
      </Head>
      <Hero>
        <HeroSection />
        
      </Hero>
      <CallforAction />
      
    </div>
  )
}
