import siteMetadata from "../siteMetadata";
import SectionContainer from './../styles/SectionContainer';
import IconComponent from "../Icon";

import styled from "styled-components";
import Link from "next/link";
import Image from 'next/image';

const StyledSocialList = styled.ul`
    a {
      padding: 7px;
      &:hover{
        color: #38bdf8;
      },
      &:focus {
        transform: translateY(-3px);
      }
      svg {
        width: 20px;
        height: 20px;
      }
    
`;

const editUrl = (fileName) => `${siteMetadata.siteRepo}/blob/master/data/blog/${fileName}`;

const postDateTemplate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
export default function PostLayout({ frontMatter, authorDetails, next, prev, children }) {
    console.log(authorDetails);
    const { slug, fileName, date, title, images, tag } = frontMatter
    return (
        <SectionContainer>
            <article>
                <div className="py-8 xl:divide-y xl:divide-gray xl:dark:divide-gray">
                    <header className="pt-6 xl:pb-6">
                        <div className="space-y-1 text-center">
                            <dl className="space-y-10">
                                <div>
                                    <dt className="sr-only"> Published on</dt>
                                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                        <time dateTime={date}>
                                            {new Date(date).toLocaleDateString(siteMetadata.locale, postDateTemplate)}
                                        </time>
                                    </dd>
                                </div>
                            </dl>
                            <div className="text-3xl font-extrabold leading-9 tracking-tight text-gray-400 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                                {title}
                            </div>
                        </div>
                    </header>
                    <div
                        className="divide-y divide-gray pb-8 dark:divide-gray xl:grid xl:grid-cols-4 xl:gap-x-6 xl:divide-y-0"
                        style={{ gridTemplateRows: 'auto 1fr' }}
                    >
                        <dl className="pt-6 pb-10 xl:border-b xl:border-gray-100 xl:pt-5 xl:dark:border-gray-100">
                            <dt className="sr-only">Authors</dt>
                            <dd>
                                <ul className="flex justify-center items-center space-x-8 sm:space-x-12 xl:block xl:space-x-0 xl:space-y-8">
                                    <li className="flex items-center space-x-2">
                                        <Image
                                            src="/assets/me.png"
                                            width={38}
                                            height={38}
                                            alt="avatar"
                                            className="h-10 w-10 rounded-full"
                                        />

                                        <dl className="whitespace-nowrap text-sm font-medium leading-5">
                                            <dt className="sr-only">Name</dt>
                                            <dd className="text-gray-300 dark:text-gray-100">Michelle Nguyen</dd>
                                            <dt className="sr-only">Twitter</dt>
                                            <dd>
                                                <StyledSocialList>
                                                    <Link href="https://twitter.com/chisoulofmusic" passHref className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400 w-10 h-10"
                                                        aria-label="twitter_" target="_blank" rel="noreferrer"  >
                                                        <IconComponent name="twitter" />
                                                    </Link>
                                                </StyledSocialList>
                                            </dd>
                                        </dl>
                                    </li>
                                </ul>
                            </dd>
                        </dl>
                        <div className="divide-y divide-gray dark:divide-gray xl:col-span-3 xl:row-span-2 xl:pb:0">
                            <div className="prose max-w-none pt-10 pb-8 dark:prose-dark"> {children}</div>
                        </div>
                    </div>
                </div>

            </article>
        </SectionContainer>
    )
}