import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
    alldevice: {
        breakpoint: { max: 4000, min: 0 },
        items: 1
    }
};

const bannerdata = [
    {
        id:1,
        img: "https://picsum.photos/seed/picsum/200/300"
    },
    {
        id:2,
        img: "https://picsum.photos/200/300?grayscale"
    },
     {
        id:3,
        img: "https://fastly.picsum.photos/id/4/5000/3333.jpg?hmac=ghf06FdmgiD0-G4c9DdNM8RnBIN7BO0-ZGEw47khHP4"
    }
]

function Banner() {
    return (
        <>
             <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={3000}>
                {
                    bannerdata.map((items, index) => (
                        <div className="banner" key={index}>
                            <img src={items.img} alt="" />
                        </div>
                    ))
                }
            </Carousel>

        </>
    )
}

export default Banner
