import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import socialMedia from "./socialMedia";
import Side from './Side';
import IconComponent from "./Icon";

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
  li {
    &:last-of-type {
      margin-bottom: 20px;
      line
    }
    a {
      &:hover {
        color: #38bdf8;
        scale: 105;
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

const Social =({isHome}) =>{
    return (

    <Side isHome={isHome} orientation="left" >
        <div>
            <StyledSocialList>
                {socialMedia &&  socialMedia.map(( platform , i) => {
                    return (
                        <li key={i} >
                        <a  aria-label={platform.title} target="_blank" rel="noreferrer" >
                            <IconComponent name={platform.title} />
                        </a>
                    </li>
                    )
                    })}
            </StyledSocialList>
        </div>           
    </Side>
    )
};

Social.PropTypes = {
    isHome: PropTypes.bool,
};

export default Social;