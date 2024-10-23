import { useDispatch, useSelector } from "react-redux";
import { togggleMenu } from "../utils/navslice";
import { useEffect, useState } from "react";
import { YOUTUBE_SEARCH_API } from "../utils/constants";
import { cacheResults } from "../utils/SearchSlice";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const dispatch = useDispatch();
  const searchCache = useSelector((store) => store.search);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
        console.log("cache found");
      } else {
        getSearchSuggestions();
      }
    }, 200);
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);
  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const jsonData = await data.json();
    setSuggestions(jsonData[1]);
    dispatch(
      cacheResults({
        [searchQuery]: jsonData[1],
      })
    );
  };
  const toggleHandler = () => {
    dispatch(togggleMenu());
  };
  return (
    <div className="grid grid-flow-col my-2 p-5 shadow-md">
      <div className="col-span-1 flex">
        <img
          onClick={() => toggleHandler()}
          className="h-8 cursor-pointer"
          alt="menu"
          src="https://static.vecteezy.com/system/resources/previews/021/190/402/original/hamburger-menu-filled-icon-in-transparent-background-basic-app-and-web-ui-bold-line-icon-eps10-free-vector.jpg"
        />
        <img
          className="h-8 mx-2"
          alt="icon"
          src="https://t4.ftcdn.net/jpg/06/09/13/31/360_F_609133122_u5vaiyCHsL5UqtdrSNrV5llL2JC1oYWi.jpg"
        />
      </div>
      <div className="col-span-10  pl-56">
        <div>
          <input
            type="text"
            className="px-1 w-1/2 border border-gray-500 p-2 rounded-l-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e?.target?.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
          />
          <button className="border border-gray-500 p-2 rounded-r-full text-md">
            Search
          </button>
        </div>
        {showSuggestion && (
          <div className="fixed px-5 py-2 w-[33rem] bg-white shadow-lg rounded-lg">
            <ul>
              {suggestions.map((suggestion) => (
                <li key={suggestion} className="m-1 p-1 hover:bg-gray-100">
                  {suggestion}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img
          className="h-8"
          alt="userlogo"
          src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
        />
      </div>
    </div>
  );
};
export default Header;
