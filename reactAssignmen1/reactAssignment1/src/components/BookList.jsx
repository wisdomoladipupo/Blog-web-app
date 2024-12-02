import Book from "./Book";

const Books = [
  {
    id: 1,
    title: "the great gabsy",
    author: "F. Scott Fitzgerald",
    price: 10.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    price: 8.99,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: 12.99,
    image: "https://via.placeholder.com/150",
  },
];


export const BookList = () => {
  return (
    <div>
      <h1>welcome to the bookstore</h1>
      <div>
        {Books.map((book) => (
          <Book
            key={book.id}
            author={book.author}
            title={book.title}
            image={book.image}
            price={book.price}
          />
        ))}
      </div>
    </div>
  );
};
