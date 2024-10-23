import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/constants";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    getVideos();
  }, []);
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const jsondata = await data.json();
    setVideos(jsondata?.items);
  };
  return (
    <div className="flex flex-wrap">
      {videos.length !== 0 &&
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id} key={video.id}>
            <Videocard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default Videocontainer;
