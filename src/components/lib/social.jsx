import React from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import socialMedia from "./socialMedia";
import Side from './Side';
import IconComponent from "./Icon";
import Link from 'next/link';
const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color:grey;
  }
  width: 40px;
  position: fixed;
  bottom: 0;
  left: 40px;
  right: auto;
  z-index: 10;


  @media: (max-width: 1080px) {
    left: 40px;
    right: auto;
  }
  @media (max-width: 768px) {
    display: none;
  }
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

const Social = ({ isHome }) => {
  const [hasMounted, setHasMounted] = React.useState(false);
  React.useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return (

    // <Side isHome={isHome} orientation="left" >
<div>
      <StyledSocialList>
        {socialMedia && socialMedia.slice(0, 10).map((platform, index) => {
          return (
            <Link key={index} href={platform.url} passHref>
              <li>
                <a aria-label={platform.title} target="_blank" rel="noreferrer" >
                  <IconComponent name={platform.title} />
                </a>
              </li>
            </Link>
          );
        })}
      </StyledSocialList>
      </div>
    // </Side>
  )
};

Social.propTypes = {
  isHome: propTypes.bool,
};

export default Social;