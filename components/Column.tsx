import { PlusCircleIcon } from "@heroicons/react/20/solid";
import React, { useEffect, useState } from "react";
import { Draggable, Droppable } from "react-beautiful-dnd";
import TodoCard from "./TodoCard";
import useBoardStore from "@/store/BoardStore";

type Props = {
  id: TypedColumn;
  todos: Todo[];
  index: number;
};

const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  todo: "To Do",
  inprogress: "In Progress",
  done: "Done",
};

function Column({ id, todos, index }: Props) {
  const { searchString } = useBoardStore();

  const [filteredTodos, setFilteredTodos] = useState([...todos]);

  useEffect(() => {
    const debounceTimeout = setTimeout(() => {
      const filtered = todos.filter((todo) =>
        todo.title.toLowerCase().includes(searchString.toLowerCase())
      );
      setFilteredTodos(filtered);
    }, 500);
    return () => clearTimeout(debounceTimeout);
  }, [searchString, todos]);

  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Droppable droppableId={index.toString()} type='card'>
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`pb-2 p-2 rounded-2xl shadow-sm ${
                  snapshot.isDraggingOver ? "bg-green-200" : "bg-white/50"
                }`}
              >
                <h2 className='flex justify-between font-bold text-xl p-2'>
                  {idToColumnText[id]}
                  <span className='text-gray-500 bg-gray-200 rounded-full px-2 py-1 text-   font-normal'>
                    {filteredTodos.length}
                  </span>
                </h2>
                <div className='space-y-2'>
                  {filteredTodos.map((todo, index) => (
                    <Draggable
                      key={todo.$id}
                      draggableId={todo.$id}
                      index={index}
                    >
                      {(provided) => (
                        <TodoCard
                          id={id}
                          index={index}
                          todo={todo}
                          innerRef={provided.innerRef}
                          dragHandleProps={provided.dragHandleProps}
                          draggableProps={provided.draggableProps}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  <div className='flex items-end justify-end p-2'>
                    <button className='text-green-500 hover:text-green-600'>
                      <PlusCircleIcon className='h-10 w-10' />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
}

export default Column;
