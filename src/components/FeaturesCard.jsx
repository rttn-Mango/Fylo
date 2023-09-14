export default function FeaturesCard({image, alt, subHeading, content}){
    return(
        <article className="features__card">
            <img src={image} alt={alt} />
            <p>{subHeading}</p>
            <p>{content}</p>
        </article>
    )
}