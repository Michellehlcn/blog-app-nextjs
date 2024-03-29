import SocialIcon from './../icons/index';
//import Image from '@/components/Image'
import { PageSEO } from './../SEO';
import Link from 'next/link';
import IconComponent from '../Icon';
import socialMedia from '../socialMedia';
import Image from 'next/image';
import styled from 'styled-components';

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  li {
    &:last-of-type {
      margin-bottom: 20px;
    }
    a {

      &:hover {
        color: #38bdf8;
      },
      &:focus {
        transform: translateY(-3px);
      }
      svg {
        width: 20px;
        height: 20px;
      }
    }
  }
`;

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, twitter, linkedin, github } = frontMatter

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
         
        </div>
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">

            <Image
              src="/assets/me-fix.png"
              width={160}
              height={180}
              alt="avatar"
              className="h-36 w-40 rounded-full"
            />

            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-6">
              {/* <SocialIcon kind="mail"  /> */}
              {socialMedia && socialMedia.slice(0, 10).map((platform, index) => {
                return (
                  <StyledSocialList key={platform.title}>
                    <Link  href={platform.url} passHref aria-label={platform.title} target="_blank" rel="noreferrer" >
                      <IconComponent name={platform.title} />
                    </Link>
                  </StyledSocialList>
                )
              })}
         
            </div>
          </div>
          <div className="prose max-w-none pt-8 pb-8 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}