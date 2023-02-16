import React from "react";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { QueryClient, QueryClientProvider } from "react-query";
import { Flag } from "../App";

const client = new QueryClient();

test("act issue repro", async () => {
  const { getByRole } = render(
    <QueryClientProvider client={client}>
      <Flag country={"ua"} />
    </QueryClientProvider>
  );
  const image = await waitFor(() => getByRole("img"));
  expect(image.src).toContain("flag-ua.png");
});
