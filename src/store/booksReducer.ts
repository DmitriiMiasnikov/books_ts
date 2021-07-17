interface InitialStates {
  books: { name: string, author: string }[]
}

const initialStates: InitialStates = {
  books: [
    { name: 'book', author: 'author' },
    { name: 'book', author: 'author' },
    { name: 'book', author: 'author' }
  ]
}

const booksReducer = (state = initialStates, action: any) => {
  switch(action.type) {
    case (''): {
      return { ...state }
    }
    default: break;
  }
  return state;
}

export default booksReducer;