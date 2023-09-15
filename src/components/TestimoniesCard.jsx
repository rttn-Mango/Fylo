export default function TestimoniesCard({content, image, userName, title}){
    return(
        <article className="testimony">
            <p className="content">{content}</p>
            <div className="testimony__user">
                <img src={image} alt="User" />
                <div>
                    <p className="name">{userName}</p>
                    <p className="title">{title}</p>
                </div>
            </div>
        </article>
    )
}