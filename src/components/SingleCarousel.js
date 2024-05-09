import React from 'react'
import Carousel from 'react-bootstrap/Carousel';

function SingleCarousel() {
    return (
        <>
            <Carousel data-bs-theme="dark" fade className='mb-5 mt-2'>
                <Carousel.Item>
                    <img
                        className="carousel-image d-block w-100"
                        src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt91603120633fede7/662fd91e58ce889b32c32e2b/8-3-Kickoff-Thumbnail-16x9-Textless-V1.jpg?auto=webp&disable=upscale&height=504"
                        alt="First slide"
                    />
                    {/* <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption> */}
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-image d-block w-100"
                        src="https://cdn2.unrealengine.com/everything-you-need-to-know-about-valorant-s-sniper-shotgun-the-outlaw-1920x1080-a516312d02f5.png"
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="carousel-image d-block w-100"
                        src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/bltc655d62fc92e4acd/649bdd9094be10f2698941ed/071123_Val_EP7_China_CG_Banner.jpg?auto=webp&disable=upscale&height=549"
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    )
}

export default SingleCarousel