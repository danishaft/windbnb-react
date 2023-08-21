import { useState } from "react";
import "./Header.scss"
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { FaLocationDot } from "react-icons/fa6";
const Header = () => {
    const [formData, setFormData] = useState({
        location: "Helsinki, Finland",
        adultCount: 0,
        childrenCount: 0,
        setModal: "close",
        activeItem: "item1"
    })
    let sum = formData.adultCount + formData.childrenCount
    const handleForm = (e) =>{
        const {innerText, className} = e.target
        setFormData(prev => {
            return{
                ...prev,
                [className]: innerText
            }
        })
    }
    const modal = (e) =>{
        e.stopPropagation(e)
        const name = e.currentTarget.classList[0]
        const id = e.currentTarget.id
        setFormData(prev => {
            return{
                ...prev,
                [name]: id
            }
        })
    }


    //current
    const addGuests = (e) => {
        const attr = e.currentTarget.getAttribute('data-test-id')
        const action = e.currentTarget.className
        if(action === "add"){
            setFormData(prev => {
                return{
                    ...prev,
                    [attr]: attr === 'adultCount' ? prev.adultCount + 1 : prev.childrenCount + 1
                }
            })
        }else {
            if(formData.adultCount > 0){
                setFormData(prev => {
                    return{
                        ...prev,
                        [attr]: prev.adultCount - 1
                    }
                })
            }else if (formData.childrenCount > 0) {
                setFormData(prev => {
                    return{
                        ...prev,
                        [attr]: prev.childrenCount - 1
                    }
                })
            }
        }
    }
    //end

    const activate = (item) =>{
        setFormData(prev=>{
            return{
                ...prev,
                activeItem: item
            }
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
    }
    return(
       <>
         <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img src="logo.beef9462.svg" alt="logo" />
                </div>
                <div className=" setModal header__menu" id="open" onClick={modal}>
                    <button className="header__btn">Helsinki, Finland</button>
                    <button className="header__btn">Add guests</button>
                    <button className="header__btn"><BsSearch className="search__icon" /></button>
                </div>
            </div>
        </header>
        <div className={`modal ${formData.setModal}`}>
            <div className="modal__top">
                <span>Edit your search</span>
                <span id="close" className="setModal" onClick={modal}><RxCross2 /></span>
            </div>
            <form action="">
                <div className="modal__form">
                    <div onClick={() => activate("item1")} className="input__data">
                        <input id="location" type="text" name="location" value={formData.location} readOnly disabled />
                        <label htmlFor="">LOCATION</label>
                    </div>
                    <div onClick={() => activate("item2")} className="input__data">
                        <input id="guests" type="text" name="guests" value={sum > 0 ? ` ${sum} guests` : "Add guests"} readOnly disabled/>
                        <label htmlFor="">GUESTS</label>
                    </div>
                </div>

                
                <div className="options">
                    <div id="option--location"  className={`options__location ${formData.activeItem === 'item1' ? 'flex' : 'close'}`}>
                        <span className="location" onClick={handleForm}><FaLocationDot className="location__icon"/>Helsinki, Finland</span>
                        <span className="location" onClick={handleForm}><FaLocationDot className="location__icon"/>Turku, Finland</span>
                        <span className="location" onClick={handleForm}><FaLocationDot className="location__icon"/>Oulu, Finland</span>
                        <span className="location" onClick={handleForm}><FaLocationDot className="location__icon"/>Vaasa, Finland</span>
                    </div>
                    <div id="option--guests" className={`options__guests ${formData.activeItem === 'item2' ? 'open' : 'close'}`}>
                        <div className="guests--type">
                            <h3>Adults</h3>
                            <p>Ages 13 or above</p>
                            <div className="counter">
                                <button className="minus" type="button" onClick={addGuests} data-test-id="adultCount">-</button>
                                <span>{formData.adultCount}</span>
                                <button className="add" type="button" onClick={addGuests} data-test-id="adultCount">+</button>
                            </div>
                        </div>
                        <div className="guests--type">
                            <h3>Children</h3>
                            <p>Ages 2-12</p>
                            <div className="counter">
                                <button className="minus" type="button" onClick={addGuests} data-test-id="childrenCount">-</button>
                                <span>{formData.childrenCount}</span>
                                <button className="add" type="button" onClick={addGuests} data-test-id="childrenCount">+</button>
                            </div>
                        </div>
                    </div>
                </div>
                <button type="submit" onClick={handleSubmit}><BsSearch className="submit__icon" />Search</button>
            </form>
        </div>
       </>
        
    )
}
export default Header