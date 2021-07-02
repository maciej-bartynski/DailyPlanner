export interface iBoard {
  id: string;
  title: string;
  description: string;
  tasks: {taskId: string; from: string; to: string}[];
}

export interface iBoardFormCreate extends Omit<iBoard, 'id'> {}

export interface iBoardFormUpdate extends Partial<Omit<iBoard, 'id'>> {}
