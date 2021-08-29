export interface iTask {
  id: string;
  name: string;
  description: string;
  duration: number;
}

export interface iTaskFormCreate extends Omit<iTask, 'id'> {}

export interface iTaskFormUpdate extends Partial<Omit<iTask, 'id'>> {}
