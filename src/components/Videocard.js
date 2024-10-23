import React from "react";

const Videocard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="px-3 py-1 m-2 w-72 shadow-lg rounded-lg">
      <img
        className="rounded-lg p-2"
        alt="thumbnail"
        src={thumbnails?.medium?.url}
      />
      <ul>
        <li className="font-bold py-2 text-wrap">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount}Views</li>
      </ul>
    </div>
  );
};

export default Videocard;
