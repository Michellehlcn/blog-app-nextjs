import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';

const StyledSideElement = styled.div`
width: 40px;
position: fixed;
bottom: 0;
left: ${props =>(props.orientation === 'left' ? '40px' :'auto')};
right: ${props => (props.orientation === 'left' ? 'auto' : '40px')}};
z-index: 10;


@media: (max-width: 1080px) {
    left: ${props => (props.orientation === 'left' ? '20px': 'auto')};
    right: ${props => (props.orientation === 'left' ? 'auto' : '20px')};
}
@media (max-width: 768px) {

}
`;

const Side = ({ children, isHome, orientation }) => {
    const [isMounted, setIsMounted] = useState(false);
    
    useEffect(() => {
        if(!isHome ) {
            return;
        }
        const timeout = setTimeout(() => setIsMounted(true));
        return () => clearTimeout(timeout);
    }, []);

    return (
        <StyledSideElement orientation={orientation}>
                <TransitionGroup component={null}>            
                        <CSSTransition >
                            {children}
                        </CSSTransition>            
                </TransitionGroup>   
        </StyledSideElement>
    )
}

Side.PropTypes = {
    children: PropTypes.any.isRequired,
    isHome: PropTypes.bool,
    orientation: PropTypes.string,
}

export default Side;