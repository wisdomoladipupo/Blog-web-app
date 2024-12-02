const Book = ({ author, price, id, title, image }) => {
  return (
    <div>
      <div>
        <div>{title}</div>
        <div>{author}</div>
        <div>{price.toFixed(2)}</div>
      </div>
    </div>
  );
};

export default Book;
