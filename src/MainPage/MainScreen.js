import React, { useState, useEffect } from "react";
import "../../src/components/Homepage/homepage.css";
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import AOS from "aos";
import "aos/dist/aos.css";
// import Topproducts from "../Products/TopProducts"
import Banner from "../MainPage/Banner"
import Footer from "../components/Footer"
import image from "../images/little-delicious-cake-with-cream-along-with-berries-bright-desk-cake-biscuit-berry-sweet-sugar-photo.jpg"
import image1 from "../images/frame-food-ingredients-baking-gently-pink-pastel-table-cooking-flat-lay-with-copy-space-top-view-baking-concept-flat-lay.jpg"
import image2 from "../images/top-view-assortment-beautiful-tableware-with-copy-space.jpg"
import image3 from "../images/wallpaper.jpg"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Products from "../Products/Products";
import Subscribe from "../components/Subscribe/Subscribe"


const MainScreen = () => {

    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 800,
            easing: "ease-in-sine",
            delay: 100,
        });
        AOS.refresh();
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };
    const images = [
        { id: 1, url: image1, title: `Image 1`, name: "cakes" },
        { id: 2, url: image2, title: 'Image 2', name: "cakes" },
        { id: 3, url: image3, title: 'Image 3', name: "cakes" },
        // { id: 4, url: 'image4.jpg', title: 'Image 4' },
        // { id: 5, url: 'image5.jpg', title: 'Image 5' },
    ];
    return (
        <div className="bg-red-200" >

            <div styles={{ height: '500px', overflowY: 'scroll' }}>


                {/* Image carousal  */}
                <Carousel data-bs-theme="dark" >
                    <Carousel.Item style={{ height: 500 }}>
                        <img
                            className="d-block w-100"
                            src={image3}
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h5>The taste of our amazing cakes</h5>
                            <p>Celebrate special occasion with your near and dear ones</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: 500 }}>
                        <img
                            className="d-block w-100"
                            src={image1}
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item style={{ height: 500 }}>
                        <img
                            className="d-block w-100"
                            src={image2}
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h5>Third slide label</h5>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>



                {/* Introduction to cake shop */}
                <div class="m-10">
                    <div class="container mx-auto">
                        <h1>Deliciously Crafted for Every Occasion</h1>
                        <div class="m-10">
                            Welcome to Shreejas cake Creation, where every cake is a masterpiece crafted with love and passion. Our homemade cakes are made from the finest ingredients, ensuring each bite is a delightful experience. Whether you're celebrating a special occasion or simply indulging in a sweet treat, our cakes are designed to bring joy and sweetness to your life. From classic flavors to unique creations, our cakes are baked to perfection and decorated with care. Discover the magic of homemade goodness at shreeja creation, where every cake tells a story of tradition, creativity, and deliciousness..</div>
                    </div>

                </div>
                {/* Product page */}

                <Products />
                {/* Banner */}

                {/* Subscribe page */}
                <Subscribe />
                <Banner />
                <Footer />
            </div >





        </div >
    )
}


export default MainScreen;