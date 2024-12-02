import "./App.css";
import { BookList } from "./components/BookList";

function App() {
  return (
    <>
      <div>
        <header>my book store</header>
        <h1>hello guys</h1>
        <main>
          <BookList />
        </main>
        <footer>bye guys</footer>
      </div>
    </>
  );
}

export default App;
