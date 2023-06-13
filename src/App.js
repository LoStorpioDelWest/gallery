import { BsTwitter } from "react-icons/bs"
import { BiCommentDetail } from "react-icons/bi"
import { IoCloseSharp } from "react-icons/io5"
import { useEffect, useRef, useState } from "react";
import { ClockLoader } from "react-spinners";
import { useMediaQuery } from "react-responsive";
import { GiHamburgerMenu } from "react-icons/gi"
import Welcome from "./frames/Welcome";
import About from "./frames/About";
import Rates from "./frames/Rates";
import Gallery from "./frames/Gallery";
import Rules from "./frames/Rules";
import Footer from "./frames/Footer";
import HowToBook from "./frames/HowToBook";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

function App() {
  const menuQuery1 = useMediaQuery({ query: '(min-width: 1288px)' })
  const menuQuery2 = useMediaQuery({ query: '(min-width: 861px)' })
  const menuQuery3 = useMediaQuery({ query: '(min-width: 588px)' })
  const [opened, setOpened] = useState(false)
  const [loading, setLoading] = useState(false)
  const [openedMore, setOpenedMore] = useState(false)
  const [firstPopup, setAppearence] = useState(true)
  const reviewRef = useRef(null)
  const userRef = useRef(null)
  const emailRef = useRef(null)

  useEffect(() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false)
        setOpened(false)
      }, 2000)
    }
  }, [loading])

  return (
    <div className="w-full relative">
      <Welcome />
      <About />
      <Rules />
      <HowToBook />
      <Rates />
      <Gallery />

      <div className="w-full bg-dgray min-h-[400px] flex flex-col items-center pt-14 pb-7 px-7" id="reviews">
        <p className="text-3xl text-black font-semibold">Leave a review</p>

        <p className="w-full max-w-[800px] text-lg text-center mt-3">
          Want to leave a review? Please click on the message icon
        </p>

        <div className="w-full max-w-[800px] flex justify-end items-end mt-7">
          <BiCommentDetail
            size={30}
            color={"#000"}
            className="mr-1 cursor-pointer"
            onClick={() => setOpened(true)}
          />
          <p
            className="text-3xl text-black font-bold cursor-pointer"
            onClick={() => setOpened(true)}
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
            <Review name="PrinceJ" text="I saw April before heading to Europe and let me tell you she has me typing this message 4000 miles away from Canada.. her pictures don’t do her justice..especially with those juicy plump lips, best bbj experience ive received, treat her good fellas" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="William72" text="Saw the ad, was skeptical at first with the deposit as I’ve never done this before but glad I followed through, very open minded and you can tell she loves what she does which is rare nowdays" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Bp1241" text="As an avid Diamond agency person April has completely stopped this for me as I became a regular for her, im a very picky person especially when it comes to RP but April is extremely patient and intellectual which was also a big turn on for me" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Blueman2" text="Very busy woman but very much worth the wait" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Chipdude69" text="April was amazing!! Did overnights with her and was way more into kink friendly suggestions which is a bonus" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Canuckslover63" text="I had a session with April at her downtown incall not too long ago, very adorable, petite, with an amazing body and damn, she gives an excellent tease to build up tension. It’s good to know she’s good for the price she charges" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Monsterzero" text="Sadly doesn’t offer duos but when she told me it won’t be necessary since handling her is already difficult enough she was not kidding, very legit and knows how to use those lips of hers, bbj was done PFE..highly recommend it" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Rockson" text="Contacted her via email for an online session since I like to build up connection and was 100% worth it. Ended up doing 3 online sessions as I ended up travelling for work but still communicated with April, will be seeing her when I’m back in 1-2 months.. will be writing a follow up review, Thank you, my darling April, I can’t wait" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Geniedutch" text="Emailed her to see her availability but wasn’t able to schedule me till a week after since she said she had exams, but after we scheduled she definitely made up for me being patient, highly recommend" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="Will2serveU" text="Gentlemen, I just wanted to put in a quick plug for April who is a truly hidden gem …hot session. Reverse cowgirl is forever etched in my memory, unfortunately I am heading back to the States but as she requested for me to leave a review this will not do her any justice. You must experience it for yourself" />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="GeneralG" text="I reached out after a cancellation, and Miss April did not disappoint. Very personable, friendly, and the skills on point. One of the greatest asses around, and knows how to get to work. Great communication for this meeting, 10/10 would recommend and visit again." />
          </SwiperSlide>
          <SwiperSlide>
            <Review name="LongHorn" text="April immediately made me feel comfortable and at ease with her warm, friendly demeanour. She listened carefully to my concerns and tailored the session to my needs no worries. She asked me to cuddle to warm her up before she started giving me a massage which was pretty damn cute… I couldn’t help but feast my eyes on her absolutely perfect body, this goddess's skills were truly angelic. Beautiful perky breasts with responsive nipples. Nice voluptuous round bum and one of the prettiest and tightest little kitties I have had the pleasure to be inside… I will keep the details to my memories but I would highly recommend her" />
          </SwiperSlide>
        </Swiper>
      </div>

      <Footer />

      <div className="w-full h-[80px] flex items-center justify-center bg-lpink px-10 fixed top-0">
        <div className="flex items-center justify-between h-full w-full max-w-[1400px]">
          <p className="text-2xl font-semibold">April Rose</p>
          {
            menuQuery3 &&
            <>
              <HeaderLink text="About me" href="about" position="start" />
              <HeaderLink text="Rates" href="rates" position="start" />
            </>
          }
          {
            menuQuery2 &&
            <>
              <HeaderLink text="Reviews" href="reviews" position="center" />
              <HeaderLink text="How to book me?" href="book" position="center" />
            </>
          }
          {
            !menuQuery1 ?
              <div className={"relative group cursor-pointer group flex items-center " + (menuQuery3 ? "justify-center" : "justify-end")} onClick={() => setOpenedMore(!openedMore)}>
                {
                  menuQuery3 ?
                    <p className="font-semibold">More</p>
                    :
                    <GiHamburgerMenu size={20} color="#000" />

                }
                <div className={(menuQuery3 ? "h-0 group-hover:h-fit" : openedMore ? "h-fit" : "h-0") + " w-[200px] bg-lpink absolute top-6 overflow-hidden"}>
                  {
                    !menuQuery3 &&
                    <>
                      <MoreLink text="About me" closeDropDown={() => setOpenedMore(false)} href="about" position="start" />
                      <MoreLink text="Rates" closeDropDown={() => setOpenedMore(false)} href="rates" position="start" />
                    </>
                  }
                  {
                    !menuQuery2 &&
                    <>
                      <MoreLink text="Reviews" closeDropDown={() => setOpenedMore(false)} href="reviews" position="center" />
                      <MoreLink text="How to book me?" closeDropDown={() => setOpenedMore(false)} href="book" position="center" />
                    </>
                  }
                  <MoreLink text="Gallery" closeDropDown={() => setOpenedMore(false)} href="gallery" position="start" />
                  <MoreLink text="Contact" closeDropDown={() => setOpenedMore(false)} href="contact" position="end" />
                  <MoreLink text="Touring dates" closeDropDown={() => setOpenedMore(false)} href="touring" position="center" />
                  <MoreLink text="Rules" closeDropDown={() => setOpenedMore(false)} href="rules" position="center" />

                  {!menuQuery3 && <MoreLink text="Twitter" closeDropDown={() => setOpenedMore(false)} href="https://twitter.com/latinagirl789" />}
                </div>
              </div>
              :
              <>
                <HeaderLink text="Gallery" href="gallery" position="start" />
                <HeaderLink text="Contact" href="contact" position="end" />
                <HeaderLink text="Touring dates" href="touring" position="center" />
                <HeaderLink text="Rules" href="rules" position="center" />
              </>
          }

          {menuQuery3 && <a href="https://twitter.com/latinagirl789"><BsTwitter color="#000" size={20} className="cursor-pointer" /></a>}
        </div>
      </div>

      <div className={(opened ? "fixed" : "hidden") + " top-0 left-0 w-full h-screen flex items-center justify-center bg-white bg-opacity-40 px-5 z-40"}>
        <div className={"bg-white w-full max-w-[600px] min-h-[300px] py-3 px-4 relative flex flex-col items-center " + (loading && "justify-center")}>
          {
            !loading ?
              <>
                <p className="font-bold text-3xl">Your Review</p>
                <div className="w-full mt-5">
                  <p className="text-xl font-semibold">Username:</p>
                  <input
                    type={"text"}
                    className="w-full bg-transparent border border-black focus:outline-0 p-1 mt-2 placeholder-black text-lg"
                    placeholder="Ex. Karsen"
                    ref={userRef}
                  />
                </div>

                <div className="w-full mt-3">
                  <p className="text-xl font-semibold">Email:</p>
                  <input
                    type={"email"}
                    className="w-full bg-transparent border border-black focus:outline-0 p-1 mt-2 placeholder-black text-lg"
                    placeholder="Ex. example@mail.com"
                    ref={emailRef}
                  />
                </div>

                <div className="w-full mt-3">
                  <p className="text-xl font-semibold">Review:</p>
                  <textarea
                    className="w-full min-h-[200px] max-h-[600px] bg-transparent border border-black focus:outline-0 p-1 mt-2 placeholder-black text-lg"
                    placeholder="Write your review"
                    ref={reviewRef}
                  >

                  </textarea>
                </div>

                <div
                  className="w-fit h-fit py-2 px-6 font-semibold hover:text-white hover:bg-black border border-black transition-colors rounded-xl mt-6 cursor-pointer"
                  onClick={() => {
                    if (reviewRef.current.value != "" && userRef.current.value != "" && emailRef.current.value != "") setLoading(true)
                  }}
                >
                  Send review
                </div>

                <IoCloseSharp
                  size={30}
                  className="absolute top-1 right-3 cursor-pointer"
                  onClick={() => setOpened(false)}
                />
              </>
              :
              <>
                <ClockLoader
                  loading={true}
                  color="#000"
                  size={50}
                />
                <p className="font-bold text-lg mt-2">Thank you for your review, it will be posted shortly</p>
              </>
          }
        </div>
      </div>

      {
        firstPopup &&
        <div className={"fixed top-0 left-0 w-full h-screen flex items-center justify-center bg-white bg-opacity-40 z-40"}>
          <div className="bg-white flex flex-col items-center w-[300px] py-5 text-3xl px-2 text-center">
            This website is only for 18+
            <div className="bg-black w-fit h-fit rounded-xl mt-5 cursor-pointer text-white text-xl px-5 font-semibold py-2" onClick={() => setAppearence(false)}>
              I am 18+
            </div>
          </div>
        </div>
      }
    </div>
  );
}

const HeaderLink = ({
  text = "",
  href = "",
  position = ""
}) => {

  const scrollElement = (id) => {
    //document.getElementById(id).scrollIntoView({ behavior: "smooth" })
    document.getElementById(id).scrollIntoView({ behavior: "smooth", block: position })
  }

  return (
    <div className="relative cursor-pointer group" onClick={() => scrollElement(href)}>
      <p className="font-semibold">{text}</p>
      <div className="absolute h-[3px] bg-black w-[0px] group-hover:w-full transition transition-all"></div>
    </div>
  )
}

const MoreLink = ({
  text = "",
  href = "",
  closeDropDown = () => { },
  position = ""
}) => {

  const scrollElement = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth", block: position })
  }

  return (
    !href.startsWith("https://") ?
      <div className="cursor-pointer group py-3 w-full h-fit text-center" onClick={() => {
        scrollElement(href)
        closeDropDown()
      }}>
        <p className="font-semibold">{text}</p>
      </div>
      :
      <a href={href}>
        <div className="cursor-pointer group py-3 w-full h-fit text-center" onClick={closeDropDown}>
          <p className="font-semibold">{text}</p>
        </div>
      </a>
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

export default App;
