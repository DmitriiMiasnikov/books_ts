import { BookWrapper } from "./styled";

interface Props {
  book: { name: string; author: string };
}

const BooksListItem = ({ book }: Props): JSX.Element => {
  const { name, author } = book;
  return (
    <BookWrapper>
      {name}, {author}
    </BookWrapper>
  );
};

export default BooksListItem;
