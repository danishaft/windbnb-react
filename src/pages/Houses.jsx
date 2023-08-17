import { AiFillStar } from "react-icons/ai";
import "./Houses.scss"
const Houses = () =>{
    return(
        <main className="container">
            <h1 className="heading">Stays in Finland</h1>
            <div className="houses">
                <div className="house">
                    <img src="kitchen.jpg" alt="one stay" />
                    <div className="house__content">
                        <div className="content__top">
                            <span className="house__type">Super host</span>
                            <p className="house__info">Entire apartment . 2 beds</p>
                            <span className="house__rating"><AiFillStar className="star" />4.40</span>
                        </div>
                        <p className="house__desc">Stylist apartment in center of the city</p>
                    </div>
                </div>

                <div className="house">
                    <img src="parlour.jpg" alt="one stay" />
                    <div className="house__content">
                        <div className="content__top">
                            <span className="house__type">Super host</span>
                            <p className="house__info">Entire apartment . 2 beds</p>
                            <span className="house__rating"><AiFillStar className="star" />4.40</span>
                        </div>
                        <p className="house__desc">Stylist apartment in center of the city</p>
                    </div>
                </div>

                <div className="house">
                    <img src="staircase.jpg" alt="one stay" />
                    <div className="house__content">
                        <div className="content__top">
                            <span className="house__type">Super host</span>
                            <p className="house__info">Entire apartment . 2 beds</p>
                            <span className="house__rating"><AiFillStar className="star" />4.40</span>
                        </div>
                        <p className="house__desc">Stylist apartment in center of the city</p>
                    </div>
                </div>

                <div className="house">
                    <img src="room.jpg" alt="one stay" />
                    <div className="house__content">
                        <div className="content__top">
                            <span className="house__type">Super host</span>
                            <p className="house__info">Entire apartment . 2 beds</p>
                            <span className="house__rating"><AiFillStar className="star" />4.40</span>
                        </div>
                        <p className="house__desc">Stylist apartment in center of the city</p>
                    </div>
                </div>

                <div className="house">
                    <img src="sitting-room.jpg" alt="one stay" />
                    <div className="house__content">
                        <div className="content__top">
                            <span className="house__type">Super host</span>
                            <p className="house__info">Entire apartment . 2 beds</p>
                            <span className="house__rating"><AiFillStar className="star" />4.40</span>
                        </div>
                        <p className="house__desc">Stylist apartment in center of the city</p>
                    </div>
                </div>

                <div className="house">
                    <img src="dinning.jpg" alt="one stay" />
                    <div className="house__content">
                        <div className="content__top">
                            <span className="house__type">Super host</span>
                            <p className="house__info">Entire apartment . 2 beds</p>
                            <span className="house__rating"><AiFillStar className="star" />4.40</span>
                        </div>
                        <p className="house__desc">Stylist apartment in center of the city</p>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Houses