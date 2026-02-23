import React from 'react'
import badges from './badges'

export default function Badge({variant = 'square', color = 'gray', text = 'Badge'}) {
    const badgeSchema = badges.find(badge => badge.schema === color)
    return (
        <p 
            className={`badge ${variant}`} 
            style={{backgroundColor: badgeSchema.background, color: badgeSchema.color}}>
            {text}
        </p>
    )
}

