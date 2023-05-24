import { Carousel } from 'react-bootstrap'
import bannerpost from "../data/banner.json"

const Banner = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div>
            <Carousel >
                {bannerpost.map((item, idx) => (
                    <Carousel.Item
                        key={item.id}
                        style={{
                            backgroundImage: `url(${item.image})`,
                            height: '800px',
                            width: '100vw',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat'
                        }}>
                        <div >
                            {idx}
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </div>
    )
}

export default Banner