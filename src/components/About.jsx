import Heading from './Heading';
import portrait from "../assets/portrait.png";

export default function About() {


    return (
        <section aria-label="about">
            <Heading title="about" />
            <div className="mt-10 mx-8 md:mx-24 flex flex-col items-start gap-8 lg:flex-row lg:gap-10 2xl:space-x-36">
                <div className="top-28 rounded-md lg:w-1/2">
                    <img
                    loading="lazy"
                    className="aspect-square h-auto w-full rounded-md object-cover object-center md:aspect-auto"
                    src={portrait}
                    width="600"
                    height="600"
                    alt="placeholder"
                    />
                </div>
                <div className="lg:w-1/2">
                    <div className="w-full">
                    <p className="font-satoshi-regular text-tertiary-100 overflow-hidden text-[4vw] lg:text-body-1">
                        I am a 4th-year student at Arizona State University studying Computer Science - upon graduation I will be working as a full-stack software engineer in fintech.
                        <br/>
                        <br/>
                        I have a passion for learning - my latest endeavor being UI/UX design and developing my front-end skills (hence this website).
                        <br/>
                        <br/>
                        I also enjoy numerous hobbies such as racket sports, rock climbing, music, and photography.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}