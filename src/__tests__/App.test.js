import { render, screen } from "@testing-library/react";
import App from "../App";

test("App doesn't crash", () => {
  // eslint-disable-next-line react/react-in-jsx-scope
  const div = document.createElement("div");
  render(<App />, div);
});
