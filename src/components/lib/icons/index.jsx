import Mail from './mail.js';
import Github from './github.svg';
import Facebook from './facebook.js';
import Youtube from './youtube.js';
import Linkedin from './linkedin.svg';
import Twitter from './twitter.svg';

// ICons taken from https://simpleicons.org/
// https://github.com/timlrx/tailwind-nextjs-starter-blog/blob/master/components/social-icons/index.js

const components = {
    mail: Mail,
    github: Github,
    facebook: Facebook,
    youtube: Youtube,
    linkedin: Linkedin,
    twitter: Twitter,
  }
  
  const SocialIcon = ({ kind, href, size = 8 }) => {
    if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
      return null;
  
    const SocialSvg = components[kind];
  
    return (
      <a
        className="text-sm text-gray-500 transition hover:text-gray-600"
        target="_blank" 
        href={href}
      >
        <span className="sr-only">{kind}</span>
        <SocialSvg 
          className={`fill-current text-gray-700 hover:text-blue-500 dark:text-gray-200 dark:hover:text-blue-400 h-${size} w-${size}`}
        />
      </a>
    )
  }
  
  export default SocialIcon;
