// export default initialTaskState ={
//     title: "",
//     description: "",
//     priority_id: 1,
// }

const initialTaskState = {
    title: "",
    description: "",
    priority_id: 1,
}

export default initialTaskState;

function getPriorityColor(priority) {
    switch (priority) {
        case 3:
            return 'red';
        case 2:
            return 'blue';
        case 1:
            return 'green';
        default:
            return 'gray';
    }
}

function getPriorityTitle(priority) {
    switch (priority) {
        case 3:
            return 'High Priority';
        case 2:
            return 'Medium Priority';
        case 1:
            return 'Low Priority';
        default:
            return 'Unknown Priority';
    }
}

export { getPriorityColor, getPriorityTitle };