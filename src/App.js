import "./sass/main.css";
import React, { useState, useEffect } from 'react';
import OverviewCard from "./components/OverviewCard";
import StatsCard from "./components/StatsCard";
import Header from "./components/Header.jsx";

// SOCIAL MEDIA ICONS //////////////////////////
import fbIcon from "./images/icon-facebook.svg";
import igIcon from "./images/icon-instagram.svg";
import twIcon from "./images/icon-twitter.svg";
import ytIcon from "./images/icon-youtube.svg";

// ARROWS ////////////////////////////////////////
import up from "./images/icon-up.svg";
import down from "./images/icon-down.svg";
import { createContext } from "react";

export const ThemeContext = createContext(null);
/*
  Function that chooses an icon by the "icon" parameter value
*/
const chooseIcon = (icon) => {
  if (icon == "fb") return fbIcon;
  if (icon == "ig") return igIcon;
  if (icon == "tw") return twIcon;
  if (icon == "yt") return ytIcon;
  if (icon == "up") return up;
  if (icon == "down") return down;
}



function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "dark" ? "light":"dark"));
  }

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div className="App" id={theme}>
        <Header
          changeEvent={() => toggleTheme()}
          checkedValue={theme === "light"}
        />
        <div className="stat-card-container">
          <StatsCard
            socialIcon="fb"
            user="@nathanf"
            followers="1987"
            arrow="up"
            newFollowers="12"
            positiveBalance={true}
          />
          <StatsCard
            socialIcon="tw"
            user="@nathanf"
            followers="1044"
            arrow="up"
            newFollowers="99"
            positiveBalance={true}
          />
          <StatsCard
            socialIcon="ig"
            user="@realnathanf"
            followers="11k"
            arrow="up"
            newFollowers="1099"
            positiveBalance={true}
          />
          <StatsCard
            socialIcon="yt"
            user="Nathan F."
            followers="8239"
            arrow="down"
            newFollowers="144"
            positiveBalance={false}
          />
        </div>
        <div className="overview-card-container">
          <h2 className="overview-container-title">Overview - Today</h2>
          <div className="content">
            <OverviewCard
              statName="Page Views"
              socialIcon="fb"
              statNumber="87"
              arrowIcon="up"
              positiveBalance={true}
              percentaje="3"
            />
            <OverviewCard
              statName="Likes"
              socialIcon="fb"
              statNumber="52"
              arrowIcon="down"
              positiveBalance={false}
              percentaje="2"
            />
            <OverviewCard
              statName="Likes"
              socialIcon="ig"
              statNumber="5462"
              arrowIcon="up"
              positiveBalance={true}
              percentaje="2257"
            />
            <OverviewCard
              statName="Profile Views"
              socialIcon="ig"
              statNumber="52k"
              arrowIcon="up"
              positiveBalance={true}
              percentaje="1375"
            />
            <OverviewCard
              statName="Retweets"
              socialIcon="tw"
              statNumber="117"
              arrowIcon="up"
              positiveBalance={true}
              percentaje="303"
            />
            <OverviewCard
              statName="Likes"
              socialIcon="tw"
              statNumber="507"
              arrowIcon="up"
              positiveBalance={true}
              percentaje="553"
            />
            <OverviewCard
              statName="Total Views"
              socialIcon="yt"
              statNumber="1407"
              arrowIcon="down"
              positiveBalance={false}
              percentaje="12"
            />
            <OverviewCard
              statName="Likes"
              socialIcon="yt"
              statNumber="107"
              arrowIcon="down"
              positiveBalance={false}
              percentaje="19"
            />
          </div>
        </div>
      </div>
    </ThemeContext.Provider>
  );
}




export { chooseIcon };
export default App;


/*
        <StatsCard 
          socialIcon=""
          user=""
          followers=""
          arrow=""
          newFollowers=""
          positiveBalance={}
        />
      <OverviewCard 
        statName=""
        socialIcon=""
        statNumber=""
        arrowIcon=""
        positiveBalance={}
        percentaje=""
      />
*/