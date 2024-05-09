import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from 'react-bootstrap/Card';

import { useTheme } from "@mui/material";
import { tokens } from "../theme";

const responsive = {
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4,
        slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 3,
        slidesToSlide: 1 // optional, default to 1.
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 2,
        slidesToSlide: 2 // optional, default to 1.
    }
};

function MultiCarousel() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <div className='py-5' style={{ backgroundColor: colors.grey[800] }}>
            <div className='container'>
                <h3 className='mb-3' style={{ color: colors.grey[300] }}>Most Poppular Contents</h3>
                <Carousel
                    swipeable={false}
                    draggable={false}
                    showDots={true}
                    arrows={true}
                    autoPlay={true}
                    responsive={responsive}
                    slidesToSlide={1}
                    ssr={true} // means to render carousel on server-side.
                    infinite={true}
                    autoPlaySpeed={3000}
                    keyBoardControl={true}
                    customTransition="all .5"
                    transitionDuration={500}
                    removeArrowOnDeviceType={["tablet", "mobile"]}
                >
                    <div style={{ marginRight: "20px", marginBottom: "20px" }}>
                        <Card className='border-0 bg-transparent'>
                            <Card.Img variant="top"
                                src="https://imageio.forbes.com/specials-images/imageserve/613766b74881e4e67926a2c3/The-Valorant-Spectrum-skins/960x0.jpg?format=jpg&width=960"
                                alt="First slide"
                            />
                            <Card.Body className='px-0'>
                                <Card.Title style={{ color: colors.grey[300] }}>Spectrum</Card.Title>
                                <Card.Text style={{ color: colors.grey[300] }}>
                                    Including: Phantom, Classic, Gurdian and Bulldog.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ marginRight: "20px", marginBottom: "20px" }}>
                        <Card className='border-0 bg-transparent'>
                            <Card.Img variant="top"
                                src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2022/01/07/Protocol_Bundle_1920x1080.jpg"
                                alt="First slide"
                            />
                            <Card.Body className='px-0'>
                                <Card.Title style={{ color: colors.grey[300] }}>Protocal</Card.Title>
                                <Card.Text style={{ color: colors.grey[300] }}>
                                    Including: Phantom, Classic, Gurdian and Bulldog.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ marginRight: "20px", marginBottom: "20px" }}>
                        <Card className='border-0 bg-transparent'>
                            <Card.Img variant="top"
                                src="https://imgsvc.trackercdn.com/url/size(1280x720),fit(cover),quality(100)/https%3A%2F%2Ftrackercdn.com%2Fghost%2Fimages%2F2023%2F12%2F61620_GAmtNhxXYAARcxv.jpg/image.jpg"
                                alt="First slide"
                            />
                            <Card.Body className='px-0'>
                                <Card.Title style={{ color: colors.grey[300] }}>Overdrive</Card.Title>
                                <Card.Text style={{ color: colors.grey[300] }}>
                                    Including: Phantom, Classic, Gurdian and Bulldog.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ marginRight: "20px", marginBottom: "20px" }}>
                        <Card className='border-0 bg-transparent'>
                            <Card.Img variant="top"
                                src="https://dotesports.com/wp-content/uploads/2024/01/VAL_Kuronami_Bundle_1920x1080.jpg"
                                alt="First slide"
                            />
                            <Card.Body className='px-0'>
                                <Card.Title style={{ color: colors.grey[300] }}>Kuronami</Card.Title>
                                <Card.Text style={{ color: colors.grey[300] }}>
                                    Including: Phantom, Classic, Gurdian and Bulldog.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ marginRight: "20px", marginBottom: "20px" }}>
                        <Card className='border-0 bg-transparent'>
                            <Card.Img variant="top"
                                src="https://cdn-cf.ginx.tv/imgcdn/7zvIxroIO1STya317FnMgMSxZ96Bx7NDOyu7-MComW4/rs:fill:2400:0:1/g:ce/aHR0cHM6Ly93d3cuZ2lueC50di91cGxvYWRzMi9WYWxvcmFudC9yZ3hfYnVuZGxlL1JHWF8xMXpfUHJvXzIwMjJfQnVuZGxlXzE5MjB4MTA4MC5qcGc"
                                alt="First slide"
                            />
                            <Card.Body className='px-0'>
                                <Card.Title style={{ color: colors.grey[300] }}>RGX</Card.Title>
                                <Card.Text style={{ color: colors.grey[300] }}>
                                    Including: Phantom, Classic, Gurdian and Bulldog.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ marginRight: "20px", marginBottom: "20px" }}>
                        <Card className='border-0 bg-transparent'>
                            <Card.Img variant="top"
                                src="https://beebom.com/wp-content/uploads/2023/09/Chronovoid-Valorant-skin-collection.jpg?w=750"
                                alt="First slide"
                            />
                            <Card.Body className='px-0'>
                                <Card.Title style={{ color: colors.grey[300] }}>Chronovoid</Card.Title>
                                <Card.Text style={{ color: colors.grey[300] }}>
                                    Including: Phantom, Classic, Gurdian and Bulldog.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                    <div style={{ marginRight: "20px", marginBottom: "20px" }}>
                        <Card className='border-0 bg-transparent'>
                            <Card.Img variant="top"
                                src="https://www.dexerto.com/cdn-cgi/image/width=3840,quality=75,format=auto/https://editors.dexerto.com/wp-content/uploads/2021/07/08/SentinelsofLight_Bundle_1920x1080-1.jpg"
                                alt="First slide"
                            />
                            <Card.Body className='px-0'>
                                <Card.Title style={{ color: colors.grey[300] }}>Sentinel of Light</Card.Title>
                                <Card.Text style={{ color: colors.grey[300] }}>
                                    Including: Phantom, Classic, Gurdian and Bulldog.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                </Carousel>
            </div>
        </div>
    )
}

export default MultiCarousel