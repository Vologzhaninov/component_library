import React from 'react'
import banners from './banners'

export default function Banner({variant = 'single-line', status = 'success'}) {
    const bannerSchema = banners.find(banner => banner.schema === status)
    return (
        <div 
            className={`banner ${variant} ${status}`} 
            style={{backgroundColor: bannerSchema.background, 
                color: bannerSchema.color}}
        >
            <h5 
                className="banner-title" 
                style={{color: bannerSchema.title_color}}
            >
            <img 
                className="banner-icon" 
                src={bannerSchema.icon} 
                alt={`${status} icon`} 
            />
                {bannerSchema.title}
            </h5>
            {variant === 'multi-line' && <p className="banner-description">{bannerSchema.text}</p>}
        </div>
    )
}
