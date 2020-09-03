import React from 'react'

export const NavBar = ({countries, handleClick}) => {

    return (
        <div className="navbar">
            <ul>
                {countries.map(item => {
                    return (
                        <li key={item.id} onClick={() => handleClick(item.id)}>
                            {item.name}
                        </li>
                    )}
                )}
                <li onClick={() => handleClick(0)}>
                    все
                </li>
            </ul>
        </div>
    )
}