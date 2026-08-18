import { useState } from 'react'
import '../style/header.css'

export function header(props) {
    return (
        <>
            <div className='main-header'>
                <h1>Memory Card</h1>
                <div className="scoreHeader">
                    <div>Score: {props.score}</div>
                    <div>Best score: {props.bestScore}</div>
                </div>
            </div>
        </>
    )
}