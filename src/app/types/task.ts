export default interface Task {
  _id?: string;
  user: string;
  status: string;
  dueDate: Date;
  priority: string;
  description: string;
}
