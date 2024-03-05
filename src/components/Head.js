import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { useEffect, useState } from 'react';
import { YOUTUBE_SEARCH_API } from '../utils/constants';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {
  const [searchQuery, setSearchQuery] = useState('');
  // console.log(searchQuery);

  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchCache = useSelector((store) => store.search);

  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  useEffect(() => {
    // console.log('API CALL ' + searchQuery);

    const timer = setTimeout(() => {
      //if "searchResults already present" in store - if(cache){setSuggestions(json[1])} --- if the diff btw 2 API calls(key press or key strokes) is >200ms
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      }
      //else "searchResults not present" in store - else{getSearchSuggestions()}
      else {
        //"MAKE AN API CALL" after every key press - if the diff btw 2 API calls(key press or key strokes) is >200ms
        getSearchSuggestions();
      }
    }, 200);

    //But if the diff btw 2 API calls is <200ms , COMPONENT UNMOUNTED --- "DECLINE the API CALL"
    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    // console.log(json);
    setSuggestions(json[1]);

    //update cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

  return (
    <div className=" grid grid-flow-col p-2 shadow-lg">
      <div className=" flex col-span-3 m-2">
        <img
          onClick={() => toggleMenuHandler()}
          className=" h-7 cursor-pointer"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
          alt="menu"
        />
        <a href="/">
          <img
            className=" h-6 mt-1 mx-4"
            src="https://vectorseek.com/wp-content/uploads/2021/01/YouTube-Logo-Vector.png"
            alt="youtube-logo"
          />
        </a>
      </div>
      <div className=" col-span-8 px-10">
        <div>
          <input
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery}
            type="text"
            placeholder="Search"
            className=" w-[58%] border border-gray-400 px-5 py-2 rounded-l-full"
          />
          <button className=" border border-gray-400 rounded-r-full px-4 py-2 bg-gray-100">
            🔍
          </button>
        </div>
        {showSuggestions && (
          <div className=" absolute bg-white px-2 py-2 w-[32.5rem] shadow-lg rounded-2xl border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className=" py-2 shadow-sm px-3 hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className=" col-span-1 m-2">
        <img
          className=" h-7"
          src="https://static.vecteezy.com/system/resources/previews/022/123/337/original/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg"
          alt="user"
        />
      </div>
    </div>
  );
};
export default Head;
