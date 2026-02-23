import testimonial_template from './testimonial_template'

export default function Testimonial({
    children,
    logo = testimonial_template.logo,
    fullname = testimonial_template.fullname,
    position = testimonial_template.position,
    company = testimonial_template.company,
    text = testimonial_template.text2
}) {
    return (
        <div className="testimonial-no-image">
            {children ? children :
            <>
                <img 
                    className="testimonial-logo"
                    src={logo} alt="Company Logo"  
                />
                <p className="testimonial-text">{`"${text}"`}</p>
                <h4>
                    {fullname}
                    <img 
                        className="testimonial-path-icon"
                        src="./components/images/path.png" alt="Path Icon"/>
                    <span>
                        {`${company}, ${position}`}
                    </span>                    
                </h4>
            </>}
        </div>
    )
}