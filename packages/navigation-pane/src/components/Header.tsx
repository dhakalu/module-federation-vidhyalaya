import React from 'react';

interface NavigationHeaderProps {
    title: string,
}

const NavigationHeader = ({
    title = ''
} : NavigationHeaderProps) => {
    return <h2>{title}</h2>
}

export default NavigationHeader;