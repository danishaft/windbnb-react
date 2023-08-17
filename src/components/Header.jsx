const Header = () => {
    return(
        <header>
            <div className="header__container">
                <div className="header__logo">
                    <span className="logo__triangle"></span>
                    <span className="logo__text">windbnb</span>
                </div>
                <div className="header__menu">
                    <form>
                        <input name="location" type="text" value="search" />
                        <input type="text" name="guests" id="" />
                        <input type="submit" value="submit" />
                    </form>
                </div>
            </div>
        </header>
    )
}
export default Header