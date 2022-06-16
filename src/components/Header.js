function Header() {
  return (
    <>
      <header>
        <div className="header-div flex align-items-center justify-between">
          <div className="logo flex align-items-center">
            <div className="logo-img">
              <img className="full-width" src="./assets/logo.jpeg" />
            </div>
            <span>MY APPLICATION</span>
          </div>
          <div className="profile flex align-items-center">
            <div className="profile-img">
              <img className="full-width" src="./assets/profile.webp" />
            </div>
            <cite> Ravindra Rajpoot</cite>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
