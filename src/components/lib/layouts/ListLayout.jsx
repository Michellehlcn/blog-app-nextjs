import Link from 'next/link';
// import Tag from 'next/tag';
import siteMetadata from '../siteMetadata';
import { useState } from 'react';
import Pagination from './../pagination';
import formatDate from '../formatDate';

import { SiBlogger } from 'react-icons/si';

export default function ListLayout ({ posts, title, initialDisplayPosts = [] , pagination}) {
    const [searchValue, setSearchValue ] = useState('');
    const filteredBlogPosts = posts.filter((frontMatter) =>{
        const searchContent = frontMatter.title + frontMatter.summary + frontMatter.tags.join(" ")
        return searchContent.toLowerCase().includes(searchValue.toLowerCase());
    })


    const displayPosts = initialDisplayPosts.length >0 && !searchValue ? initialDisplayPosts : filteredBlogPosts;
    return ( 
        <>
            <div className='divide-y divide-gray-300 dark:divide-gray-700'>
                <div className='space-y-2 pt-6 pb-8 md:space-y-5'>
                    <h1 className='text-2xl font-extrabold leading-9 track-tight sm:text-4xl sm:leading-10 md:text-6xl md:leading-14 text-[#38bdf8] tracking-wide mb-5 pt-20 mt-[44px] md:mt-[60px] flex gap-5'>
                    <SiBlogger />{title}
                    </h1>
                    <div className='relative max-w-lg'>
                        <input aria-label='Search articles'
                                type="text"
                                onChange={(e) => setSearchValue(e.target.value)}
                                placeholder="Search articles"
                                className='block w-full rounderd-md border border-gray-300 bg-white px-4 py-2 text-gray-500 focus:border-primary-500 dark:border-gray-900 dark:bg-gray-800 dark:text-gray-100'>
                        </input>
                        {/* // Magnificient glass icon */}
                        <svg className='absolute right-3 top-3 h-5 w-5 text-gray-400 dark:text-300 '
                        xmln="https://www.w3.org/2000/svg"
                        fill="none"
                        viewBox='0 0 24 24'
                        stroke="currentColor"
                        >
                            <path 
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth={2}
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            />
                        </svg>

                    </div>
                </div>
                <url>
                    {!filteredBlogPosts.length && 'No posts found.'}
                    {displayPosts.map((frontMatter) => {
                        const {slug, date, title, summary, tags} = frontMatter;
                        //console.log(typeof tags, tags[0]);

                        return (
                            <ul key={slug} className="py-4">
                                <article className='space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0'>
                                    <dl>
                                        <dt className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'> Published on</dt>
                                        <dd className='text-base font-medium leading-6 text-gray-500 dark:text-gray-400'>
                                            <time dateTime={date}>{formatDate(date)}</time>
                                        </dd>
                                    </dl>
                                    <div className='space-y-3 xl:col-span-3'>
                                        <div>
                                            <h3 className='text-2xl font-bold leading-8 tracking-light'>
                                                <Link href={`/blog/${slug}`} className=" text-gray-600 dark:text-gray-300">
                                                    {title}
                                                </Link>
                                            </h3>
                                            <div className='flex flex-wrap'>
                                                {tags.map( (tag,i) => {
                                                    return (
                                                    <a key={i} className="mr-3 text-sm text-[#38bdf8] font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400">{tag}</a>
                                                    )                                                 
                                                })}
                                                    
                                            </div>
                                        </div>
                                        <div className='prose max-w-none text-gray-500 dark:text-gray-400'>
                                            {summary}
                                        </div>
                                    </div>
                                </article>
                            </ul>
                        )
                    })}
                </url>
            </div>
            {pagination && pagination.totalPages >1 && !searchValue && (
                <Pagination currentPage={pagination.currentPage} totalPages={pagination.totalPages} />
            )}
        </>
    )
} 