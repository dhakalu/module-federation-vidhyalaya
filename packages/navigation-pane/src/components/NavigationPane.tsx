import Styles from './Styles'
import React, { useState, KeyboardEvent, ChangeEvent } from 'react';
import NavigationHeader from './Header';

interface NavigationPaneProps {
    title: string,
}

const NavigationPane = ({
    title = '',
}: NavigationPaneProps) => {


    return (
        <Styles.Wrapper>
            <NavigationHeader title={title} />
        </Styles.Wrapper>
    )
}

export default NavigationPane;