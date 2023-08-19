import "./Header.scss"
const Header = () => {
    return(
        <header className="header">
            <div className="header__container">
                <div className="header__logo">
                    windbnb
                </div>
                <div className="header__menu">
                    <button className="header__btn">Whole, Finland</button>
                    <button className="header__btn">Add guests</button>
                    <button className="header__btn">search</button>
                    {/* <form>
                        <input name="location" type="text" value="search" />
                        <input type="text" name="guests"/>
                        <input type="submit" value="submit" />
                    </form> */}
                </div>
            </div>
        </header>
    )
}
export default Header