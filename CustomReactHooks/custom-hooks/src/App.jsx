import "./App.css";
import useFetch from "./useFetch";

function App() {
  const BASE_URL = "https://inshorts.deta.dev/news?category=science"
  const { data: news, loading, error} = useFetch(BASE_URL);
  return (
    <>
      <div className="App">
        <h1> Custom React Hook (Data Fetching) </h1>
        {loading && <h3>Loading...</h3> }
        {error && <h3>Error..Something went wrong</h3>}
       <div>
        <pre>{JSON.stringify(news, undefined,2)}</pre>
       </div>
      </div>
    </>
  );
}

export default App;
