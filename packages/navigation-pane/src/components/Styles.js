

import styled from 'styled-components';
import theme from 'core/theme';

const Wrapper = styled.div`
    padding: 12px;
    position: fixed;
    left: 0;
    height: 100vh;
    background-color: ${theme.palette.background.main};
    width: 300px;
    top: 50px;
`;

export default {
    Wrapper,
};