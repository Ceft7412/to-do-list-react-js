import React from "react";

export default function Card({
  title,
  description,
  indexOfCard,
  setModal,
  handleDelete,
  handleMarkAsDone,
  handleSetToTodo,
  todoState,
}) {
  console.log("index: ", indexOfCard);
  const [dropdown, setDropdown] = React.useState(null);
  console.log("dropdown: ", dropdown);
  const handleOpen = (index) => {
    setDropdown((prev) => (prev === index ? null : index));
  };

  return (
    <div
      className="relative bg-white shadow rounded p-2 border border-neutral-200 h-40  md:w-42 cursor-pointer  transition-transform duration-300"
      onClick={(e) => {
        e.stopPropagation();
        setModal();
      }}
    >
      <div className="absolute -bottom-1 right-2 rotate-180">
        {!todoState ? (
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M789.333333 917.333333l-277.333333-128-277.333333 128V192c0-46.933333 38.4-85.333333 85.333333-85.333333h384c46.933333 0 85.333333 38.4 85.333333 85.333333v725.333333z"
              fill="#F44336"
            />
          </svg>
        ) : (
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M789.333333 917.333333l-277.333333-128-277.333333 128V192c0-46.933333 38.4-85.333333 85.333333-85.333333h384c46.933333 0 85.333333 38.4 85.333333 85.333333v725.333333z"
              fill="#008000"
            />
          </svg>
        )}
      </div>
      <div className="relative flex justify-between items-center pb-2 border-b ">
        <h1 className="font-bold pr-8 truncate" title={title}>
          {title}
        </h1>
        <div
          className="p-2 bg-neutral-100 rounded-full cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            handleOpen(indexOfCard);
          }}
        >
          <svg
            fill="#000000"
            height="12px"
            width="12px"
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 60 60"
            xmlSpace="preserve"
          >
            <g>
              <path d="M30,16c4.411,0,8-3.589,8-8s-3.589-8-8-8s-8,3.589-8,8S25.589,16,30,16z" />
              <path d="M30,44c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,44,30,44z" />
              <path d="M30,22c-4.411,0-8,3.589-8,8s3.589,8,8,8s8-3.589,8-8S34.411,22,30,22z" />
            </g>
          </svg>
        </div>
        {dropdown === indexOfCard && (
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="flex flex-col absolute right-3  top-7 shadow bg-white border "
          >
            <span
              onClick={() => {
                handleDelete();
                setDropdown(null);
              }}
              className="py-2 px-4 hover:bg-neutral-100"
            >
              Delete
            </span>
            {!todoState ? (
              <span
                onClick={() => {
                  handleMarkAsDone();
                  setDropdown(null);
                }}
                className="py-2 px-4 hover:bg-neutral-100"
              >
                Mark as done
              </span>
            ) : (
              <span
                onClick={() => {
                  handleSetToTodo();
                  setDropdown(null);
                }}
                className="py-2 px-4 hover:bg-neutral-100"
              >
                Set as todo
              </span>
            )}
          </div>
        )}
      </div>
      <div className="py-2 h-full overflow-hidden">
        <p
          className="whitespace-normal break-words overflow-hidden text-ellipsis"
          style={{
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
          title={description}
        >
          {description ? description : "No description..."}
        </p>
      </div>
    </div>
  );
}
