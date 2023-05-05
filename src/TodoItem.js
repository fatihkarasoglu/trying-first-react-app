function TodoItem({ todo }) {
    console.log('TodoItem rendered', todo);
    return(
        <li>
            {todo}
        </li>
    )
}

export default TodoItem;