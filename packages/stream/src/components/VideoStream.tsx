import Styles from './Styles'
import React, { useState, KeyboardEvent, ChangeEvent } from 'react';

interface SearchProps {
    onSearch: Function,
    value: string,
}

const VideoStream = ({
    onSearch = () => false,
    value = '',
}: SearchProps) => {


    const [currentValue, setCurrentValue] = useState(value);

    const handleKeyPress = (event : KeyboardEvent<HTMLInputElement>) : void => {
        if(event.key === 'Enter') {
            onSearch(currentValue);
        }
    };

    const handleValueChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setCurrentValue(event.target.value);
    }

    return (
        <Styles.SearchWrapper>
            <input 
                onKeyPress={handleKeyPress}
                value={currentValue}
                onChange={handleValueChange}
            />
        </Styles.SearchWrapper>
    )
}

export default VideoStream;