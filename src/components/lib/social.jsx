import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { socialMedia } from './socialMedia';
import Side from './Side';
import IconComponent from "./Icon";

const StyledSocialList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: left;
  margin: 0;
  padding: 0;
  list-style: none;
  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }
  li {
    display: flex;
    // &:last-of-type {
    //   margin-bottom: 20px;
    // }
    a {
      padding: 7px;
      &:hover,
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

const Social =({ isHome }) =>{
    <Side isHome={isHome} orientation="left">
        <StyledSocialList>
            {socialMedia && socialMedia.map(({ url, title }, i) => (
                <li key={i} >
                    <a href={url} aria-label={title} target="_blank" rel="noreferrer" >
                        <IconComponent name={title} />
                    </a>
                </li>
            ))}
        </StyledSocialList>
    </Side>
};

Social.PropTypes = {
    isHome: PropTypes.bool,
};

export default Social;