export default function TestimoniesCard({content, image, userName, title}){
    return(
        <article className="testimony">
            <p>{content}</p>
            <div className="testimony__user">
                <img src={image} alt="User" />
                <p>{userName}</p>
                <p>{title}</p>
            </div>
        </article>
    )
}