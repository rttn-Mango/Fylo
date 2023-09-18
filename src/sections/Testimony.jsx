import TestimoniesCard from "../components/TestimoniesCard"

export default function Testimony(){
    return(
        <section className="testimonies" id="testimonies">
            <div className="group | container">
                <div className="initial-wrapper">
                    <TestimoniesCard
                        
                        content="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                        image="src/assets/profile-1.jpg"
                        userName="Satish Patel"
                        title="Founder & CEO, Muddle"
                    />
                </div>
                <TestimoniesCard 
                    content="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                    image="src/assets/profile-2.jpg"
                    userName="Bruce McKenzie"
                    title="Founder & CEO, Muddle"
                />
                <TestimoniesCard 
                    content="Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine."
                    image="src/assets/profile-3.jpg"
                    userName="Iva Boyd"
                    title="Founder & CEO, Muddle"
                />
            </div>
        </section>
    )
}