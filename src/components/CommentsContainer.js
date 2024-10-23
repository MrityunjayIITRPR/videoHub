import React from "react";
const commentsData = [
  {
    name: "Mrityunjay",
    comments: "Nice video,keep it up",
    replies: [
      {
        name: "Pushpa",
        comments: "Thank You",
        replies: [
          {
            name: "Mrityunjay",
            comments: "Welcome",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Ayush",
    comments: "Nice video,keep it up",
    replies: [
      {
        name: "Pushpa",
        comments: "Thank You",
        replies: [],
      },
    ],
  },
  {
    name: "Rajesh",
    comments: "Nice video,keep it up",
    replies: [
      {
        name: "Vikash",
        comments: "Thank You",
        replies: [],
      },
    ],
  },
];
const Comment = ({ data }) => {
  const { name, comments, replies } = data;
  return (
    <div className="flex p-3 m-2 bg-gray-100 rounded-lg">
      <img
        alt="user"
        className="h-10 w-10"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{comments}</p>
      </div>
    </div>
  );
};
const CommentsList = ({ comments }) => {
  return comments.map((comment) => (
    <div key={comment}>
      <Comment data={comment} />
      <div className="ml-5  border border-l-black">
        <CommentsList comments={comment.replies} />
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div className="m-l p-2 w-[1000px] h-[500px]">
      <h1 className="text-2xl font-bold">Comments :</h1>
      <CommentsList comments={commentsData} />
    </div>
  );
};

export default CommentsContainer;
