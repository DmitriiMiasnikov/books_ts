import BooksListItem from "../BooksListItem";
import { BooksListWrapper } from "./styled";

interface Props {
  books: { name: string; author: string }[];
}


const BooksList = ({ books }: Props) => {
  return (
    <BooksListWrapper>
      {books.map((book, i) => {
        return <BooksListItem book={book} key={i}/>;
      })}
    </BooksListWrapper>
  );
};

export default BooksList;
