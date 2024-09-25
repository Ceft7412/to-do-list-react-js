import React from "react";
import { Card, Header, Error, Modal, ButtonCategory } from "./components/index";

export default function App() {
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [error, setError] = React.useState("");

  // I check una ang localstorage kung naay unod ang todos key,
  // if wala just use empty array. This is good because we can leverage
  // the useEffect to only get the the localstorage when there are values inside.
  const [todos, setTodos] = React.useState(() => {
    const storedTodos = localStorage.getItem("todos");
    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [filteredTodos, setFilteredTodos] = React.useState(todos);

  const [modal, setModal] = React.useState(null);
  console.log("todos: ", todos);

  // Load the todos from localstorage when the app component first mu load.
  React.useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  // Create a todo
  const addTodo = () => {
    if (!title) {
      setError("Oops! You forgot to add a title.");
      setTimeout(() => {
        setError("");
      }, 3000);
      return;
    }
    const newTodos = [...todos, { title, description, done: false }];
    setTodos(newTodos);
    setFilteredTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(todos));
    setTitle("");
    setDescription("");
  };

  // Update the title and description of the selected card.
  const handleUpdate = (chosenIndex, newTitle, newDescription) => {
    const updatedTodos = todos.map((todo, index) =>
      index === chosenIndex
        ? { title: newTitle, description: newDescription }
        : todo
    );
    setTodos(updatedTodos);
    setFilteredTodos(updatedTodos);
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  // Open modal with the selected card.
  const handleOpen = (index) => {
    console.log("Handle open is clicked!");
    console.log("handleOpen: ", index);
    setModal(index);
  };

  // Delete card with the selected index.
  const handleDelete = (indexOfCard) => {
    console.log("Handle delete is clicked!");
    const newTodos = todos.filter((_, index) => index !== indexOfCard);
    setTodos(newTodos);
    setFilteredTodos(newTodos);
    setModal(null);
  };

  const handleMarkAsDone = (indexOfCard) => {
    console.log("clicked");
    const newTodos = todos.map((todo, index) =>
      index === indexOfCard ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
    setFilteredTodos(newTodos);
    setModal(null);
  };

  const handleSetToTodo = (indexOfCard) => {
    console.log("clicked");
    const newTodos = todos.map((todo, index) =>
      index === indexOfCard ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
    setFilteredTodos(newTodos);
    setModal(null);
  };

  const handleAllClick = () => {
    console.log("All is clicked!");
    const allTodos = todos.map((todo) => todo);
    setFilteredTodos(todos);
  };

  const handleTodoClick = () => {
    console.log("To-do is clicked!");
    const todoTodos = todos.filter((todo) => !todo.done);
    setFilteredTodos(todoTodos);
  };

  const handleDoneClick = () => {
    console.log("Done is clicked!");
    const doneTodos = todos.filter((todo) => todo.done);
    setFilteredTodos(doneTodos);
  };

  return (
    <>
      <Header />
      <main className="pt-18 min-h-screen flex min-w-80">
        <div className="flex flex-col sm:flex-row w-full ">
          <section className="bg-white sm:fixed bottom-0 top-0  px-3 flex flex-col items-center gap-2 w-full sm:border-r sm:w-[25%] sm:px-3 lg:px-10 py-20">
            <h1 className="font-bold text-[30px]">Add Todo</h1>
            <input
              type="text"
              placeholder="Title"
              className="border w-full  rounded h-10 border-black p-2"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
            />
            <textarea
              type="text"
              className="border w-full rounded h-32 border-black p-2"
              placeholder="Add a description..."
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            <button
              className="bg-green-600 p-2 sm:w-40 md:w-48 rounded-md font-medium hover:bg-green-700 transition-colors duration-300 text-white border"
              onClick={() => addTodo()}
            >
              Submit
            </button>
          </section>
          <section className="sm:pl-[28%] flex flex-col gap-2 w-[100%] bg-stone-100 px-4 sm:px-10 py-4 h-full sm:py-20 ">
            <div className="flex gap-3 font-medium border-b pb-2">
              <ButtonCategory onClick={handleAllClick}>All</ButtonCategory>
              <ButtonCategory onClick={handleTodoClick}>To-do</ButtonCategory>
              <ButtonCategory onClick={handleDoneClick}>Done</ButtonCategory>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5  gap-3">
              {filteredTodos.map((todo, index) => (
                <div key={index}>
                  <Card
                    title={todo.title}
                    description={todo.description}
                    indexOfCard={index}
                    setModal={() => handleOpen(index)}
                    handleDelete={() => handleDelete(index)}
                    handleMarkAsDone={() => handleMarkAsDone(index)}
                    handleSetToTodo={() => handleSetToTodo(index)}
                    todoState={todo.done}
                  />
                  {modal !== null && modal === index && (
                    <div
                      className="fixed bg-black/[0.3] z-30 top-0 left-0 right-0 bottom-0"
                      onClick={() => handleOpen(null)}
                    >
                      <Modal
                        initialTitle={todo.title}
                        initialDescription={todo.description}
                        setModal={() => handleOpen(null)}
                        handleUpdate={handleUpdate}
                        indexOfItem={modal}
                      />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      {error && <Error errorMessage={error} />}
    </>
  );
}
