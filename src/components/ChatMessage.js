const ChatMessage = ({ name, message }) => {
  return (
    <div className=" flex items-center shadow-sm p-2">
      <img
        className=" h-7"
        src="https://static.vecteezy.com/system/resources/previews/022/123/337/original/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg"
        alt="user"
      />
      <span className=" font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};
export default ChatMessage;
