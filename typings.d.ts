interface Board {
  columns: Map<TypedColumn, Column>;
}

// TODO Add Dynamic Types of columns 

type TypedColumn = "todo" | "inprogress" | "done";

interface Column {
  id: TypedColumn;
  todos: Todo[];
}

interface Todo {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypedColumn;
  image?: Image;
}



interface Image {
  buckerId: string;
  fileId: string;
}