import card_template from "./card_template"

export default function Card({
    children,
    title = card_template.title, 
    description = card_template.description,
    icon = card_template.icon}) {
    return (
        <div className="card">
            {children ? children : (
            <>
                <img 
                    className="card-img"
                    src={icon} 
                />
                    <h3>{title}</h3>
                    <p>{description}</p>
            </>
            )}
        </div>
    )
}