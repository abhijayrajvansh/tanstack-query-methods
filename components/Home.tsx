"use client";

import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import axios from "axios";

const queryClient = new QueryClient();

// context provider uses client SR
export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Example />
    </QueryClientProvider>
  );
}

function Example() {
  const { isPending, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: async () => {
      const response = await axios.get(
        "https://api.github.com/repos/TanStack/query"
      );
      console.log(response);
      return response.data;
    },
  });

  return (
    <div className="w-80 mx-auto mt-10">
      {isPending && <p>loading...</p>}
      <h1 className="text-2xl text-center font-semibold mb-5">{data?.name}</h1>
      <p>{data?.description}</p>
      <strong>👀 {data?.subscribers_count}</strong>{" "}
      <strong>✨ {data?.stargazers_count}</strong>{" "}
      <strong>🍴 {data?.forks_count}</strong>
    </div>
  );
}
