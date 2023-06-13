import { useMediaQuery } from "react-responsive"
import aboutimg from "../media/about.jpg"

const About = () => {
    const imgQuery = useMediaQuery({ query: '(min-width: 875px)' })

    return (
        <div className="relative w-full bg-vanilla min-h-screen flex flex-col items-center relative py-24 px-5" id="about">
            <div className="w-full h-fit flex flex-col sp:flex-row items-center justify-center">
                <div className="px-5 py-3 bg-white w-fit max-w-[500px] max-h-[600px] text-lg overflow-y-scroll noscroll">
                    Fall in love with me within 60 minutes or just by continuing to
                    read more about me below ;)<br /><br />
                    Beyond what you can see on my photos (aka my firm god gifted
                    Latina derriere and 34 DD breasts) I promise my juicy heart
                    shaped lips, high cheek bones, and crystal green eyes will
                    charm you instantly. Even though my face isn’t shown for
                    privacy issues my modelling experience will assure you that
                    you’re in for a treat, I love seeing my new clients faces when
                    they’re in shock of the Chilean Latina goddess that’s brought in
                    front of their sugar lusted eyes.
                    <br /><br />
                    I’m that girl you exchanged flirtatious glances with at the airport
                    lounge that you can’t get out of your mind. The one you saw
                    walking out of Pilates class, her hourglass curves revealed under
                    her tight sportswear whose sensual energy seduced you.
                    <br /><br />
                    instantly. You could have seen me on a beach somewhere in
                    Hawaii, the sun kissing my soft skin, my silky crimson hair
                    dripping wet as I walk out of the ocean in my bikini. Maybe
                    even at the après ski chalet, warming up to a cup of hot
                    chocolate, or at my favorite wine bar sitting across from you, my
                    enticing crystal green eyes wandering between the pages of my
                    favourite book and your lips.
                    <br /><br />
                    Born in Chile, I’m currently undergoing my studies in
                    criminology online in Canada, I stumbled across the universe of
                    companionship. As a Gemini, physical touch, lust, incredible
                    amounts of intimacy, made this ideal for me, my actions prove
                    I’m a girl who loves what she does (which is also why I don’t
                    like charging double the amount other providers do) so what’s
                    stopping you from experiencing me?
                    <br /><br />
                    There is so much more I want to share with you but having
                    learnt the value of discretion I will only share my secrets with
                    those who get close enough to smell my perfume and hear my
                    heartbeat instantly.
                </div>

                { imgQuery && <img src={aboutimg} className="w-[500px] sp:ml-5 mt-3 sp:mt-0" /> }
            </div>

            <div className="w-fit h-fit flex flex-col items-center mt-16 sp:mt-32">
                <h1 className="font-semibold text-4xl">What i like...</h1>

                <LikeParagraph text="To win me over a nice bottle of prosecco to set the tone to unravel our experience"/>
                <LikeParagraph text="Pearl earrings to match my pearl white teeth"/>
                <LikeParagraph text="Japanese cuisine"/>
                <LikeParagraph text="Jimmy Choo heels size 6.5"/>
                <LikeParagraph text="Plane tickets to Hawaii ;)"/>
            </div>
        </div>
    )
}

const LikeParagraph = ({
    text = ""
}) =>{
    return(
        <p className="text-2xl mt-7 text-center">
            <i>{text}</i>
        </p>
    )
}

export default About