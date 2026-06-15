import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ReactCounter from "./ReactCounter.jsx";

describe("ReactCounter", () => {
  it("updates when activated", async () => {
    const user = userEvent.setup();

    render(<ReactCounter />);

    const button = screen.getByRole("button", { name: "Count 0" });
    await user.click(button);

    expect(screen.getByRole("button", { name: "Count 1" })).toBeInTheDocument();
  });
});
