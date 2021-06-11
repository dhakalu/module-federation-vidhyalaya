

import styled from 'styled-components';
import Colors from 'core/Colors'
import theme from 'core/theme';

const HEADER_HEIGHT = 50;

const HeaderWrapper = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    background: ${theme.palette.primary.main};
    color: ${theme.palette.primary.contrastText};
    height: ${HEADER_HEIGHT}px;
    border-bottom: 1px solid #ccc;
    display: flex;
    align-items: center;
    z-index: ${theme.stacking.header};
`;

export default {
    HEADER_HEIGHT,
    HeaderWrapper,
};