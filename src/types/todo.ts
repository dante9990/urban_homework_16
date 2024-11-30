export interface TodoInterface {
  id: number;
  text: string;
  complete: boolean;
}

export interface TodoState {
  tasks: TodoInterface[];
  filter: string;
}
