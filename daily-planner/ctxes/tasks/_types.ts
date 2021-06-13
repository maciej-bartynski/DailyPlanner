export interface iTask {
  title: string;
  content: string;
  length: number;
  id: number;
}

export interface iTaskContext {
  state: {
    tasks: iTask[];
  };
  addTask: () => void;
  removeTask: (id: number) => void;
}
