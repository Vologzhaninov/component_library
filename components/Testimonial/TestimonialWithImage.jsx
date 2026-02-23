import testimonial_template from './testimonial_template'

export default function TestimonialWithImage({
    image = testimonial_template.image,
    text = testimonial_template.text1,
    fullname = testimonial_template.fullname,
    company = testimonial_template.company,
    position = testimonial_template.position}) {
    return (
        <div className="testimonial-with-image">
            <img 
                className="testimonial-image" 
                src={image} 
            />
            <div className='testimonial-with-image-text'>
                <img 
                    className="quote-icon"
                    src="./images/quote.png" 
                />
                <p>{text}</p>
                <h4>
                    {fullname}
                    <span>
                        {`${company}, ${position}`}
                    </span>                    
                </h4>
            </div>
        </div>
    )
}