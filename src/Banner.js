import axios from "axios";
import React, { useState, useEffect } from "react";
import { request } from "./FetchApi";
import "./Banner.css";

const Banner = () => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    async function fetchBanner() {
      const bannerResult = await axios
        .get(request.TrendingNow)
        .then((res) =>
          setBanner(
            res.data.results[
              Math.floor(Math.random() * res.data.results.length - 1)
            ]
          )
        )
        .catch((e) => console.log(e));

      return bannerResult;
    }

    fetchBanner();
  }, []);

 // console.log(banner);

  return (
    <>
      <header
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${banner.backdrop_path}")`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_content">
          <h1 className="banner_title">
            {banner.title || banner.original_title || banner.name}
          </h1>
          <div className="buttonSection">
            <button>play</button>
            <button>My List</button>
          </div>

          <h3 className="banner_description">{banner.overview}</h3>
        </div>
        <div className="fade_bottom"></div>
      </header>
    </>
  );
};

export default Banner;
