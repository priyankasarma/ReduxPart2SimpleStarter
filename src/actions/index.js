export function selectBook(book){
    //selectBook is an ActionCreator returning an object (i.e. action) with a key 'type' and the data for the action
    return {
        type: 'BOOK_SELECTED',
        payload: book
    };
}