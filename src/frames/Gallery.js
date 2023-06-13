import img1 from "../media/1.jpg"
import img2 from "../media/2.jpg"
import img3 from "../media/3.jpg"
import img4 from "../media/4.jpg"
import img5 from "../media/5.jpg"
import img6 from "../media/6.jpg"
import img7 from "../media/7.jpg"
import img8 from "../media/8.jpg"
import img9 from "../media/9.jpg"
import img10 from "../media/10.jpg"
import img11 from "../media/11.jpg"
import img12 from "../media/12.jpg"
import img13 from "../media/about.jpg"

const Gallery = () =>{
    return(
        <div className="w-full min-h-screen py-24 flex items-center justify-center bg-white px-7" id="gallery">
            <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 gap-2">
                <Photo src={img1}/>
                <Photo src={img2}/>
                <Photo src={img3}/>
                <Photo src={img4}/>
                <Photo src={img5}/>
                <Photo src={img6}/>
                <Photo src={img7}/>
                <Photo src={img8}/>
                <Photo src={img9}/>
                <Photo src={img10}/>
                <Photo src={img11}/>
                <Photo src={img12}/>
                <Photo src={img13}/>
            </div>
        </div>
    )
}

const Photo = ({
    src = ""
}) =>{
    return(
        <img className="col-span-1 w-[400px]" src={src}/>
    )
}

export default Gallery