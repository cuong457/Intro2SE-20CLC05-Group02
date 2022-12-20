

function Banner(props) {
    const banners = props.imgs;

    let indicators = banners.map((banner, index) => {
        if (banner.index == 0) 
            return  <button type="button" 
                            data-bs-target={banner.id}
                            data-bs-slide-to={banner.index} 
                            className="active" 
                            aria-current="true"
                            key={index}>
                    </button>
        else
            return  <button type="button" 
                            data-bs-target={banner.id}
                            data-bs-slide-to={banner.index}
                            key={index}>
                    </button>
    });

    let inners = banners.map((banner, index) => {
        if (banner.index == 0) 
            return  <a  className="carousel-item active" 
                        href={banner.link}
                        key={index}>
                            <img className="d-block w-100" src={banner.img} alt="banner"/>
                    </a>
        else
            return  <a  className="carousel-item" 
                        href={banner.link}
                        key={index}>
                            <img className="d-block w-100" src={banner.img} alt="banner"/>
                    </a>
    });

    return (
        <div>
            <div className="carousel-indicators">
                {indicators}
            </div>
            <div className="carousel-inner">
                {inners}
            </div>
        </div>
    );
}

export default Banner;