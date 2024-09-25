import React from "react";

export default function Modal({
  initialTitle,
  initialDescription,
  setModal,
  handleUpdate,
  indexOfItem,
}) {
  const [title, setTitle] = React.useState(initialTitle);
  const [description, setDescription] = React.useState(initialDescription);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSave = () => {
    console.log("Save");
    handleUpdate(indexOfItem, title, description);
    setModal(null);
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="absolute left-[50%] rounded-lg  -translate-x-[50%] top-[50%] -translate-y-[50%] shadow-md bg-white border h-[365px] w-[600px]"
    >
      <div className="flex justify-between p-4 items-center border-b">
        <input
          className="font-bold text-[20px] outline-none focus:border-b border-black"
          value={title}
          onChange={handleTitleChange}
        />
        <div className="hover:bg-neutral-100 cursor-pointer" onClick={setModal}>
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="24" height="24" />
            <path
              d="M7 17L16.8995 7.10051"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7 7.00001L16.8995 16.8995"
              stroke="#000000"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="h-52 p-4">
        <textarea
          className="w-full h-full outline-none  resize-none"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
      <div className="p-4 w-full flex items-end justify-end">
        <button
          onClick={handleSave}
          className="p-2 bg-black/[0.85] text-white rounded-md w-20 hover:bg-black/[0.9]"
        >
          Save
        </button>
      </div>
    </div>
  );
}
