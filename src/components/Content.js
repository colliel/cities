import React from 'react'

export const Content = ({cities}) => {
    return (
        <div className="content">
            <ul>
                {cities.map(item => {
                    return (
                        <li key={item.id}>
                            <div className="header">
                                <h3>{item.name}</h3>
                                <span>{item.counter}</span>
                            </div>
                            <div className="details">
                                {item.details}
                            </div>
                        </li>
                    )}
                )}
            </ul>
        </div>
    )
}