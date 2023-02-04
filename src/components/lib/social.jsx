import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { socialMedia } from './socialMedia';
import { Side } from './Side';
import { Icon } from '/icons';

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
        margin: auto;
        background-auto: var(--light-slate);
    }

    li {
        &: last-of-type {
            margin-bottom:o 20px;
        }
        a {
            padding: 10px;

            &hover,
            &:focus {
                transform : transalateY(-3px);
            }

            svg {
                width: 20px;
                height: 20px;
            }
        }
    }
`;

const Social =({isHome}) =>{
    <Side isHome={isHome} orientation="left">
        <StyledSocialList>
            {socialMedia && socialMedia.map(({ url, title }, i) => (
                <li key={i} >
                    <a href={url} aria-label={title} target="_blank" rel="noreferrer" >
                        <Icon name={title} />
                    </a>
                </li>
            ))}
        </StyledSocialList>
    </Side>
}