import Link from 'next/link';
import React, { useState, useEffect } from 'react';

import { Inter } from '@next/font/google';
import { Roboto_Condensed } from '@next/font/google';

import { AiOutlineHome, AiOutlineProject } from "react-icons/ai";
import { BsPersonBoundingBox } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import { GiSkills } from "react-icons/gi";
import { SiBlogger } from "react-icons/si";
import { FaComments } from "react-icons/fa";
import styled from 'styled-components';

import { DarkModeProvider } from '../context/DarkMode';
import NavBar from 'pages/NavBar';
import Footer from 'pages/Footer';
import Social from 'components/lib/social';
import '../styles/globals.css';
import { ThemeProvider } from 'styled-components';
import theme from 'components/lib/styles/theme';

const roboto = Roboto_Condensed({
  weight: '400',
  size: '14px',
  subsets: ['latin'],
})
const inter = Inter({ subsets: ['latin'] })

async function getServerSideProps() {
  const todos = await fetch(
    "https://localhost:3000"
  ).then((response) => {
    response.json()
  });
  console.log(todos);
  return {
    props: { todos }
  };
}
const Child1 = React.forwardRef((props, ref) => {
  return <div ref={ref}>Child1</div>
});

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function App({ Component, pageProps }) {
  const [Open, setOpen] = useState(true);

  const ref = React.useRef(null);
  useEffect(() => {
    console.log(ref.current);
  }, []);

  const [sideBar, setSidebar] = useState(true);

  return (
    // Set SideBar hiden on the HomePage only

    <div className={roboto.className} ref={node => {
    }}>
      <ThemeProvider theme={theme}>
        <DarkModeProvider>
          
            <NavBar />
            <Social isHome={true} />
            <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
            <div className='flex flex-col justify-between'>

            <div className='full'>

              {/* Right Side navBar */}
              {/* <div className={sideBar ? 'md:col-start-2 md:col-span-1 sticky': 'hidden'}>

            <div className="text-white py-20 md:flex md:flex-col hidden ">
              <ul className="uppercase">
                <Link href="/">
                  <li  className="py-4 text-sm flex gap-3 items-center"><AiOutlineHome /> <span>Home</span></li>
                </Link>
                <Link href="/About">
                  <li  className="py-4 text-sm flex gap-3 items-center"> <BsPersonBoundingBox /> About</li>
                </Link>
                <Link href="/Skills">
                  <li  className="py-4 text-sm flex gap-3 items-center"> <GiSkills />Skills</li>
                </Link>
                <Link href="/Portfolios">
                  <li className="py-4 text-sm flex gap-3 items-center"><AiOutlineProject />Portfolios</li>
                </Link>
                <Link href="/Blog">
                  <li  className="py-4 text-sm flex gap-3 items-center"> <SiBlogger />Blog</li>
                </Link>
                <Link href="/">
                  <li  className="py-4 text-sm flex gap-3 items-center"><FaComments />Testimonals</li>
                </Link>
                <Link href="/Contact">
                  <li  className="py-4 text-sm flex gap-3 items-center"><BiPhoneCall />Contact</li>
                </Link>
              </ul>

            </div>
          </div> */}

              {/* Main Content */}
              <div className='mb-auto'>
                <Component {...pageProps} />
              </div>
              </div>
          </div>
              {/* Left Side Navbar */}
              {/* <div className='md:col-start-7 md:col-span-1 '><p className='text-white py-20'>right side</p></div> */}
            </div>

            <Footer />
                          
            
        </DarkModeProvider>
      </ThemeProvider>
    </div>
  )

}
