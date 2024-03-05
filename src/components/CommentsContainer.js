const CommentsContainer = () => {
  const commentsData = [
    {
      name: 'Akshay',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
      replies: [
        {
          name: 'Akshay',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
          replies: [
            {
              name: 'Akshay',
              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
              replies: [
                {
                  name: 'Akshay',
                  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                  replies: [
                    {
                      name: 'Akshay',
                      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                      replies: [
                        {
                          name: 'Akshay',
                          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                          replies: [
                            {
                              name: 'Akshay',
                              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                              replies: [
                                {
                                  name: 'Akshay',
                                  text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                                  replies: [
                                    {
                                      name: 'Akshay',
                                      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                                      replies: [
                                        {
                                          name: 'Akshay',
                                          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                                          replies: [
                                            {
                                              name: 'Akshay',
                                              text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit qui corrupti sed nihil reiciendis illo exercitationem modi fuga, commodi, temporibus reprehenderit dolore dolorum assumenda molestias cupiditate, optio saepe eos doloribus.',
                                              replies: [],
                                            },
                                          ],
                                        },
                                      ],
                                    },
                                  ],
                                },
                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];

  const Comment = ({ data }) => {
    const { name, text, replies } = data;
    return (
      <div className=" flex shadow-sm bg-gray-100 p-2 rounded-lg my-2">
        <img
          className=" w-8 h-8"
          src="https://static.vecteezy.com/system/resources/previews/022/123/337/original/user-icon-profile-icon-account-icon-login-sign-line-vector.jpg"
          alt="user"
        />
        <div className=" px-3">
          <p className=" font-bold">{name}</p>
          <p>{text}</p>
        </div>
      </div>
    );
  };

  //RECURSION
  const CommentsList = ({ comments }) => {
    return (
      <>
        {comments.map((comment, index) => (
          <div>
            <Comment key={index} data={comment} />
            <div className=" pl-5 border border-l-black ml-5">
              <CommentsList comments={comment.replies} />
            </div>
          </div>
        ))}
      </>
    );
  };

  return (
    <div className=" m-5 p-2">
      <h1 className=" text-2xl font-bold">Comments:</h1>
      <CommentsList comments={commentsData} />
      <CommentsList comments={commentsData} />
    </div>
  );
};
export default CommentsContainer;
