import Home from "../pages"
import "@testing-library/jest-dom"
import { fireEvent, render, screen } from "@testing-library/react"

describe("Home", () => {
  it("renders the Home page correctly", () => {
    render(<Home />)
    // check if all components are rendered
    expect(screen.getByTestId("content")).toBeInTheDocument()
    expect(screen.getByTestId("image")).toBeInTheDocument()
  })
})
