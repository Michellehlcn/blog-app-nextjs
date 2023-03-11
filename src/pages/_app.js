import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Script from 'next/script';

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
import * as gtag from './../components/lib/gtag';

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

  return {
    props: { todos }
  };
}


const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export default function App({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };

    router.events.on("routerChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>

      {/* -- Google tag (gtag.js) */}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-5TSZKBC21C"></Script>
      <Script id='google-analytics' strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag() {dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-5TSZKBC21C', {
          page_path: window.location.pathname,
        });
        `,
        }}
      />
      <div className={roboto.className} ref={node => {
      }}>
        <ThemeProvider theme={theme}>
          <DarkModeProvider>
            <NavBar />
            <Social isHome={true} />
            <div className='mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0'>
              <div className='flex flex-col justify-between'>
                <div className='full'>
                  {/* Main Content */}
                  <div className='mb-auto'>
                    <Component {...pageProps} />
                  </div>
                </div>
              </div>
            </div>
            <Footer />
          </DarkModeProvider>
        </ThemeProvider>
      </div>
    </>
  )

}
