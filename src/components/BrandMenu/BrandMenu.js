

function BrandMenu(props) {
    const logos = props.logos;
    const logoMenu = logos.map((logo, index) => {
        return <div className="col-6 mt-2 mb-2" key={index}>
                    <div className=" brand-hover">
                        <a href={logo.link} className="erase-underline">
                            <div className="row">
                                <div className="col-12 col-lg-4 ps-0 d-flex align-items-center justify-content-center">
                                    <img src={logo.img} className="itdetail-icon"/>
                                </div>
                                <div className="col-12 col-lg-8 ps-0 d-flex align-items-center justify-content-center">
                                    <span className="me-title text-black text-center">{logo.name}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
    });

    return (
        <>
            {logoMenu}
        </>
    );
}

export default BrandMenu;