import "./App.css";
import Header from "./components/Header";
import Filter from "./components/Filter";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div className="App">
      <Header/>
      <main className="main">

        <Input/>

        <section className="todos">

          <Filter/>

          <TodoList/>
        </section>
      </main>
    </div>
  );
}

export default App;
