import FeaturesCard from "../components/FeaturesCard"

export default function Features(){
    return(
        <section>
            <FeaturesCard 
                image="src/assets/icon-access-anywhere.svg"
                alt="limitless accessibility"
                subHeading="Access your files, anywhere"
                content="The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere."                
            />
            <FeaturesCard 
                image="src/assets/icon-collaboration.svg"
                alt="Collaboration"
                subHeading="Real-time collaboration"
                content="Securely share files and folders with friends, family and colleagues for live colalboration. No email attachments required."                
            />
            <FeaturesCard 
                image="src/assets/icon-security.svg"
                alt="security branding"
                subHeading="Security you can trust"
                content="2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files."                
            />
            <FeaturesCard 
                image="src/assets/icon-any-file.svg"
                alt="Store any file"
                subHeading="Store any type of file"
                content="Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared."                
            />
        </section>
    )
}