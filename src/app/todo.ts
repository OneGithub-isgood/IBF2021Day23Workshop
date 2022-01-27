export class Todo {
  constructor (
    public task: string,
    public priority: string,
    public dueDate: Date,
    public taskID: string,
    public status?: boolean
  ) { }

}
