export default function FeaturesCard({image, alt, subHeading, content}){
    return(
        <article className="features__card">
            <img src={image} alt={alt} />
            <div>
                <p className="sub-heading">{subHeading}</p>
                <p style={{maxWidth: '35ch'}}>{content}</p>
            </div>
        </article>
    )
}