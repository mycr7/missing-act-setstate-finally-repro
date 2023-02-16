import "./styles.css";

import { useQuery, QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

export function Flag({ country }) {
  const fetchImage = async () => await import(`flag-${country}.png`);

  const { data, error } = useQuery("flag", fetchImage);

  let url = "";

  if (error) {
    return "Error...";
  }

  if (data) {
    url = data.url;
  }

  return (
    <div>
      <img src={url} alt={`Flag ${country}`} />
    </div>
  );
}

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Flag country={"ua"} />
      </div>
    </QueryClientProvider>
  );
}
