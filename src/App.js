import { BsTwitter } from "react-icons/bs"
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
      <About action={() => setOpened(true)}/>
      <Rules />
      <HowToBook />
      <Rates />
      <Gallery />
      <Footer />

      <div className="w-full h-[80px] flex items-center justify-center bg-lpink px-10 fixed top-0 z-40">
        <div className="flex items-center justify-between h-full w-full max-w-[1400px]">
          <p className="text-2xl font-semibold">Tia Love</p>
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
              <HeaderLink text="Reviews/Leave a review" href="reviews" position="center" />
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
                      <MoreLink text="Reviews/Leave a Review" closeDropDown={() => setOpenedMore(false)} href="reviews" position="center" />
                      <MoreLink text="How to book me?" closeDropDown={() => setOpenedMore(false)} href="book" position="center" />
                    </>
                  }
                  <MoreLink text="Gallery" closeDropDown={() => setOpenedMore(false)} href="gallery" position="start" />
                  <MoreLink text="Contact" closeDropDown={() => setOpenedMore(false)} href="contact" position="end" />
                  <MoreLink text="Touring dates" closeDropDown={() => setOpenedMore(false)} href="touring" position="center" />
                  <MoreLink text="Rules" closeDropDown={() => setOpenedMore(false)} href="rules" position="center" />

                  {!menuQuery3 && <MoreLink text="Twitter" closeDropDown={() => setOpenedMore(false)} href="https://twitter.com/latinababy789" />}
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

          {menuQuery3 && <a href="https://twitter.com/latinababy789"><BsTwitter color="#000" size={20} className="cursor-pointer" /></a>}
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

export default App;
