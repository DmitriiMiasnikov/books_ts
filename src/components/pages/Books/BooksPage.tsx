import { connect } from "react-redux";
import DefaultTemplate from "../../../components/shared/templates/DefaultTemplate";
import BooksList from "./components/BooksList";

interface Props {
  books: { name: string; author: string }[];
}

const BooksPage = ({ books }: Props): JSX.Element => {
  return (
    <DefaultTemplate>
      <BooksList books={books} />
    </DefaultTemplate>
  );
};

const mapStatesToProps = (state: any) => {
  return {
    books: state.books.books,
  };
};

export default connect(mapStatesToProps, {})(BooksPage);
