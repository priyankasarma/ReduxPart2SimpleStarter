// the currentState is of the container state and not the application state
export default function (currentState = null, action) {
    let state = currentState;

    switch(action.type) {
        case 'BOOK_SELECTED':
            state = action.payload;
            break;
    }

    return state;
}