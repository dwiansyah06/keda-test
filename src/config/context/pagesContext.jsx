import React, { createContext, useState } from 'react'
export const pagesContext = createContext();

const PagesProvider = (props) => {
    const [isClickMenu, setIsClickMenu] = useState(false)
    const [isShowOpacity, setIsShowOpacity] = useState(false)

    return (
        <pagesContext.Provider 
            value={{
                isClickMenu,
                setIsClickMenu,
                isShowOpacity,
                setIsShowOpacity,
            }}
        >
            {props.children}
        </pagesContext.Provider>
    );
}

export default PagesProvider