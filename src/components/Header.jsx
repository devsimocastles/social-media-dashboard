import React, {useState, useEffect} from "react"
import "../sass/main.css";
import "../App.js";


function Header({ changeEvent, checkedValue }) {
    const [size, setSize] = useState({
        width: window.innerWidth
    })

    useEffect(() => {
        const resize = () => {
            setSize({
                width: window.innerWidth
            })
        }
        window.addEventListener('resize', resize)
    }, [])

    if (size.width >= 1024) {
        return(
            <header className="desktop-header">
            <div className="content">
                <div className="txt">
                    <h1>Social Media Dashboard</h1>
                    <p className="desktop-total-followers">Total Followers: 23,004</p>
                </div>
                <div className="theme-switch-container">
                    <span className="dark-mode">Dark Mode</span>
                    <label className="switch">
                        <input type="checkbox" onChange={changeEvent} checked={checkedValue} ></input>
                        <span className="slider round"></span>
                    </label>
                </div>
            </div>
        </header>
        );
    } else {
        return (<header className="mobile-header">
        <h1>Social Media Dashboard</h1>
        <p className="mobile-total-followers">Total Followers: 23,004</p>
        <hr className="mobile-header-div-bar"></hr>
        <div className="theme-switch-container">
          <span className="dark-mode">Dark Mode</span>
          <label className="switch">
                        <input type="checkbox" onChange={changeEvent} checked={checkedValue} ></input>
                        <span className="slider round"></span>
                    </label>
        </div>
      </header>);
    }
}

export default Header;




// const MobileHeader = () => (

// );

