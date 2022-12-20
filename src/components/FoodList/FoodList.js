

import RatingStarGenerator from '../RatingStars/RatingStars'



function FoodList(props) {
    const foods = props.foods;
    const foodlist = foods.map((food, index) => {
        return <div className="col-6 col-lg-4 pb-3" key={index}>
                    <div className="card card-hover">
                        <a href={food.link}><img src={food.img} className="card-img-top p-3"/></a>
                        <div className="card-body">
                            <a 
                                href={food.link} 
                                className="erase-underline"
                            >
                                <p className="me-title text-lightblue">{food.name}</p>
                            </a>
                            <RatingStarGenerator star={food.rating}/>
                            <p className="review-count">{food.rvcount}</p>
                            <p className="sm-title">1 offer from <span className="rtab-money">{food.price}.000 VNĐ</span></p>
                            <div className="text-center">
                                <a 
                                    className="btn btn-outline-dark rtab-detail-button" 
                                    href="/item"
                                >
                                    See more detail
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
    });

    return (
        <>
            {foodlist}
        </>
    );
}

export default FoodList;