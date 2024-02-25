import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// If you want you can use SCSS instead of css
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins if you need
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

import Image from "next/image";
import React, { useCallback, useEffect, useRef, useState } from 'react';
// import { render } from 'react-dom';
// import Hello from './Hello';
// import './style.css';


// import { LightGallerySettings } from 'lightgallery/lg-settings';

import lgVideo from 'lightgallery/plugins/video';
const Gallery = () => {
  const lightGallery = useRef(null);
  const [items, setItems] = useState([
    {
      id: '1',
      size: '1400-933',
      src: '/assets/arts/1.jpg',
      thumb:
        '/assets/arts/1.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`,
         
    },
    {
      id: '2',
      size: '1280-720',
      src: '/assets/arts/2.jpg',
      thumb:
      '/assets/arts/2.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@dann">Dan</a></h4>
                    <p>Published on November 13, 2018</p>
                </div>`,
    },
    {
      id: '3',
      size: '1280-720',
      src: '/assets/arts/3.jpg',
      thumb:
      '/assets/arts/3.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@kylepyt">Kyle Peyton</a></h4>
                    <p>Published on September 14, 2016</p>
                </div>`,
    },
    {
      id: '4',
      size: '1280-720',
      src: '/assets/arts/4.jpg',
      thumb:
      '/assets/arts/4.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '5',
      size: '1280-720',
      src: '/assets/arts/5.jpg',
      thumb:
      '/assets/arts/5.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '7',
      size: '1280-720',
      src: '/assets/arts/7.jpg',
      thumb:
      '/assets/arts/7.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '8',
      size: '1280-720',
      src: '/assets/arts/8.jpg',
      thumb:
      '/assets/arts/8.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '9',
      size: '1280-720',
      src: '/assets/arts/9.jpg',
      thumb:
      '/assets/arts/9.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '10',
      size: '1280-720',
      src: '/assets/arts/10.jpg',
      thumb:
      '/assets/arts/10.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '11',
      size: '1280-720',
      src: '/assets/arts/11.jpg',
      thumb:
      '/assets/arts/11.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '12',
      size: '1280-720',
      src: '/assets/arts/12.jpg',
      thumb:
      '/assets/arts/12.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '13',
      size: '1280-720',
      src: '/assets/arts/13.jpg',
      thumb:
      '/assets/arts/13.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '14',
      size: '1280-720',
      src: '/assets/arts/14.jpg',
      thumb:
      '/assets/arts/14.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '15',
      size: '1280-720',
      src: '/assets/arts/15.jpg',
      thumb:
      '/assets/arts/15.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '16',
      size: '1280-720',
      src: '/assets/arts/16.jpg',
      thumb:
      '/assets/arts/16.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '17',
      size: '1280-720',
      src: '/assets/arts/17.jpg',
      thumb:
      '/assets/arts/17.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '18',
      size: '1280-720',
      src: '/assets/arts/18.jpg',
      thumb:
      '/assets/arts/18.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '19',
      size: '1280-720',
      src: '/assets/arts/19.jpg',
      thumb:
      '/assets/arts/19.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '20',
      size: '1280-720',
      src: '/assets/arts/20.jpg',
      thumb:
      '/assets/arts/20.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '21',
      size: '1280-720',
      src: '/assets/arts/21.jpg',
      thumb:
      '/assets/arts/21.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '22',
      size: '1280-720',
      src: '/assets/arts/22.jpg',
      thumb:
      '/assets/arts/22.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '23',
      size: '1280-720',
      src: '/assets/arts/23.jpg',
      thumb:
      '/assets/arts/23.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '24',
      size: '1280-720',
      src: '/assets/arts/24.jpg',
      thumb:
      '/assets/arts/24.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '25',
      size: '1280-720',
      src: '/assets/arts/25.jpg',
      thumb:
      '/assets/arts/25.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '26',
      size: '1280-720',
      src: '/assets/arts/26.jpg',
      thumb:
      '/assets/arts/26.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '27',
      size: '1280-720',
      src: '/assets/arts/27.jpg',
      thumb:
      '/assets/arts/27.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '28',
      size: '1280-720',
      src: '/assets/arts/28.jpg',
      thumb:
      '/assets/arts/28.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '29',
      size: '1280-720',
      src: '/assets/arts/29.jpg',
      thumb:
      '/assets/arts/29.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '30',
      size: '1280-720',
      src: '/assets/arts/30.jpg',
      thumb:
      '/assets/arts/30.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
    {
      id: '31',
      size: '1280-720',
      src: '/assets/arts/31.jpg',
      thumb:
      '/assets/arts/31.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },

    {
      id: '33',
      size: '1280-720',
      src: '/assets/arts/33.jpg',
      thumb:
      '/assets/arts/33.jpg',
      subHtml: `<div class="lightGallery-captions">
                    <h4>Photo by <a href="https://unsplash.com/@jxnsartstudio">Garrett Jackson</a></h4>
                    <p>Published on May 8, 2020</p>
                </div>`,
    },
   
  ]);
 
  const onInit = useCallback((detail) => {
    if (detail) {
      lightGallery.current = detail.instance;
      console.log(lightGallery.current);
    }
  }, []);

  const getItems = useCallback(() => {
    return items.map((item) => {
      return (
        <a
          key={item.id}
          data-lg-size={item.size}
          className="after:content group relative mb-5 block w-full cursor-zoom-in after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight"
          data-src={item.src}
        >
          <Image
            alt={item.id}
            style={{ transform: 'translate3d(0, 0, 0)' }}
            placeholder="blur"
            blurDataURL={item.thumb}
            className="transform rounded-lg brightness-90 transition will-change-auto group-hover:brightness-110"
            src={item.thumb}
            width="720"
            height="480"
            loading='eager' 
            sizes="(max-width: 640px) 100vw,
            (max-width: 1280px) 50vw,
            (max-width: 1536px) 33vw,
            25vw"
          />
        </a>
      );
    });
  }, [items]);

  useEffect(() => {
    lightGallery.current.refresh();
    // console.log('videl', lgVideo);
  }, [items]);
  const onBeforeSlide = (detail) => {
    const { index, prevIndex } = detail;
    // console.log(index, prevIndex);
  };

  return (
    <div id="contact" className="w-full h-fit py-20 tracking-wide">
      <div className="mx-auto max-w-[1960px] p-4">

        {/* xl:grid-cols-3 2xl:grid-cols-4 */}
        <LightGallery
          elementClassNames="grid gap-4 sm:grids-cols-2 grids-cols-1 xl:grid-cols-2 2xl:grid-cols-2"
          onBeforeSlide={onBeforeSlide}
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          download={false}
        >
        
          <div className="after:content relative mb-5 flex h-[629px] flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center  shadow-highlight after:pointer-events-none after:absolute after:inset-0 after:rounded-lg after:shadow-highlight lg:pt-0">
            <div className="absolute inset-0 flex items-center justify-center opacity-20">
              <span className="flex max-h-full max-w-full items-center justify-center">
                {/* <Bridge /> */} <Image src={"/assets/arts/19.jpg"} width={500} height={500} data-src={"/assets/arts/19.jpg"}/>
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black"></span>
            </div>
           
            {/* <Logo /> */}
            <h1 className="mt-8 mb-4 text-base font-bold uppercase tracking-widest">
              Art Works
            </h1>
            <p className="max-w-[40ch] sm:max-w-[32ch]">
            Some Arts I made for the past few years
            </p>
          
          </div>
          {getItems()}
          ...
        </LightGallery>
      </div>

    </div>
  );
}


export default Gallery;
