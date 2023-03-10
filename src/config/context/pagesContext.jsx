import React, { createContext, useState } from 'react'
export const pagesContext = createContext();

const PagesProvider = (props) => {
    const [isClickMenu, setIsClickMenu] = useState(false)
    const [isShowOpacity, setIsShowOpacity] = useState(false)
    const [isShowLogin, setIsShowLogin] = useState(false)

    const loginAction = () => {
        if(isShowLogin) {
            setIsShowLogin(false)
            setTimeout(() => {
                setIsShowOpacity(false)
            }, 200);
        } else {
            if(isClickMenu) {
                setIsClickMenu(false)
                setTimeout(() => {
                    setIsShowLogin(true)
                }, 200);
            } else {
                setIsShowOpacity(true)
                setTimeout(() => {
                    setIsShowLogin(true)
                }, 200);
            }
            
        }
    }

    return (
        <pagesContext.Provider 
            value={{
                isClickMenu,
                setIsClickMenu,
                isShowOpacity,
                setIsShowOpacity,
                isShowLogin,
                setIsShowLogin,
                loginAction
            }}
        >
            {props.children}
        </pagesContext.Provider>
    );
}

export default PagesProvider