import { useMediaQuery } from "react-responsive"
import { BiCommentDetail } from "react-icons/bi"
import aboutimg from "../media/about.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

const About = ({
    action = () => {}
}) => {
    const imgQuery = useMediaQuery({ query: '(min-width: 875px)' })

    return (
        <div className="relative w-full bg-vanilla min-h-screen flex flex-col items-center relative py-24" id="about">
            <div className="w-full h-fit flex flex-col sp:flex-row items-center justify-center px-5">
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

                {imgQuery && <img src={aboutimg} className="w-[500px] sp:ml-5 mt-3 sp:mt-0" />}
            </div>

            <div className="w-full bg-dgray min-h-[400px] flex flex-col items-center pt-14 pb-7 px-7 mt-10" id="reviews">
                <p className="text-3xl text-black font-semibold">Leave a review</p>

                <p className="w-full max-w-[800px] text-lg text-center mt-3">
                    Want to leave a review? Please click on the message icon
                </p>

                <div className="w-full max-w-[800px] flex justify-end items-end mt-7">
                    <BiCommentDetail
                        size={30}
                        color={"#000"}
                        className="mr-1 cursor-pointer"
                        onClick={action}
                    />
                    <p
                        className="text-3xl text-black font-bold cursor-pointer"
                        onClick={action}
                    >
                        +
                    </p>
                </div>

                <Swiper
                    pagination={{
                        clickable: true
                    }}
                    modules={[Pagination]}
                    grabCursor={true}
                    spaceBetween={10}
                    className="mySwiper max-w-[800px] w-full"
                >
                    <SwiperSlide className="w-fit">
                        <Review name="PrinceJ" text="I saw Laura before heading to Europe and let me tell you she has me typing this message 4000 miles away from Canada.. her pictures don’t do her justice..especially with those juicy plump lips, best bbj experience ive received, treat her good fellas" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review name="William72" text="Saw the ad, was skeptical at first with the deposit as I’ve never done this before but glad I followed through, very open minded and you can tell she loves what she does which is rare nowdays" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review name="Bp1241" text="As an avid Diamond agency person Laura has completely stopped this for me as I became a regular for her, im a very picky person especially when it comes to RP but Laura is extremely patient and intellectual which was also a big turn on for me" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review name="Blueman2" text="Very busy woman but very much worth the wait" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review name="Chipdude69" text="Laura was amazing!! Did overnights with her and was way more into kink friendly suggestions which is a bonus" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review name="Canuckslover63" text="I had a session with Laura at her downtown incall not too long ago, very adorable, petite, with an amazing body and damn, she gives an excellent tease to build up tension. It’s good to know she’s good for the price she charges" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review name="Monsterzero" text="Sadly doesn’t offer duos but when she told me it won’t be necessary since handling her is already difficult enough she was not kidding, very legit and knows how to use those lips of hers, bbj was done PFE..highly recommend it" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review name="Rockson" text="Contacted her via email for an online session since I like to build up connection and was 100% worth it. Ended up doing 3 online sessions as I ended up travelling for work but still communicated with Laura, will be seeing her when I’m back in 1-2 months.. will be writing a follow up review, Thank you, my darling Laura, I can’t wait" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review name="Geniedutch" text="Emailed her to see her availability but wasn’t able to schedule me till a week after since she said she had exams, but after we scheduled she definitely made up for me being patient, highly recommend" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review name="Will2serveU" text="Gentlemen, I just wanted to put in a quick plug for Laura who is a truly hidden gem …hot session. Reverse cowgirl is forever etched in my memory, unfortunately I am heading back to the States but as she requested for me to leave a review this will not do her any justice. You must experience it for yourself" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review name="GeneralG" text="I reached out after a cancellation, and Miss Laura did not disappoint. Very personable, friendly, and the skills on point. One of the greatest asses around, and knows how to get to work. Great communication for this meeting, 10/10 would recommend and visit again." />
                    </SwiperSlide>
                    <SwiperSlide>
                        <Review name="LongHorn" text="Laura immediately made me feel comfortable and at ease with her warm, friendly demeanour. She listened carefully to my concerns and tailored the session to my needs no worries. She asked me to cuddle to warm her up before she started giving me a massage which was pretty damn cute… I couldn’t help but feast my eyes on her absolutely perfect body, this goddess's skills were truly angelic. Beautiful perky breasts with responsive nipples. Nice voluptuous round bum and one of the prettiest and tightest little kitties I have had the pleasure to be inside… I will keep the details to my memories but I would highly recommend her" />
                    </SwiperSlide>
                </Swiper>
            </div>

            <div className="w-fit h-fit flex flex-col items-center mt-16 sp:mt-32 px-5">
                <h1 className="font-semibold text-4xl">What i like...</h1>

                <LikeParagraph text="To win me over a nice bottle of prosecco to set the tone to unravel our experience" />
                <LikeParagraph text="Pearl earrings to match my pearl white teeth" />
                <LikeParagraph text="Japanese cuisine" />
                <LikeParagraph text="Jimmy Choo heels size 6.5" />
                <LikeParagraph text="Plane tickets to Hawaii ;)" />
            </div>
        </div>
    )
}

const LikeParagraph = ({
    text = ""
}) => {
    return (
        <p className="text-2xl mt-7 text-center">
            <i>{text}</i>
        </p>
    )
}

const Review = ({
    name = "",
    text = ""
}) => {
    return (
        <div className="w-full bg-white h-fit h-[240px] max-h-[240px] h-full pt-3 pb-20 px-4 mt-5 overflow-y-scroll noscroll">
            <h1 className="text-2xl text-black font-bold">{name}</h1>
            <p className="text-black mt-3 max-h-[150px] overflow-y-scroll noscroll">
                {text}
            </p>
        </div>
    )
}

export default About