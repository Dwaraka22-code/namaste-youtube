import { useDispatch } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';

const Head = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
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
        <input
          type="text"
          placeholder="Search"
          className=" w-[58%] border border-gray-400 px-5 py-2 rounded-l-full"
        />
        <button className=" border border-gray-400 rounded-r-full px-4 py-2 bg-gray-100">
          🔍
        </button>
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
