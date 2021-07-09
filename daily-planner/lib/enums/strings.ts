import { eViews, eModals } from "./screens";

export const cScreenTitles = {
    [eViews.Tasks]: 'Your tasks',
    [eViews.Boards]: 'Your boards',
    [eModals.ModalCreateTask]: 'Create task',
    [eModals.ModalCreateBoard]: 'Create board',
    [eModals.ModalAddTasks]: 'Add tasks to board'
}

export enum eButtons {
    Edit = 'Edit',
    AddTasksToBoard = 'Add tasks to board',
    Delete = 'Delete',
    Close = 'Close',
    ApplyChanges = 'Apply changes',
    CreateBoard = 'Create board',
    CreateTask = 'Create task'
}

export enum eTasksViewBackgroundCommunicates {
    Loading = 'Loading...',
    Error = 'Sorry, I couldn\'t display your tasks :C',
    Data = 'No tasks! Why don\'t you create some, lazy?',
}

