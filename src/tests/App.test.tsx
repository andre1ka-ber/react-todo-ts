import {cleanup, fireEvent, render} from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store"
import React from "react";
import TodoItem from "../components/Todo/TodoItem";

afterEach(cleanup)

describe("Testing Todo Item", () => {
  const todoData = {
    title: "Test todo",
    completed: false,
    id: Date.now()
  }

  it("Displaying provided title", () => {
    const { getByRole } = render(
      <Provider store={store}>
        <TodoItem todo={todoData}/>
      </Provider>
    );
    expect(getByRole("contentinfo")).toHaveTextContent("Test todo")
  })
  it("Status should be false", () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <TodoItem todo={todoData}/>
      </Provider>
    );
    expect(getByTestId("status-checkbox")).not.toBeChecked()
  })
  it('Change checkbox', function () {
    const { getByTestId } = render(
      <Provider store={store}>
        <TodoItem todo={todoData}/>
      </Provider>
    );
    const checkbox = getByTestId("status-checkbox")
    expect(checkbox).not.toBeChecked();
    fireEvent.change(checkbox, { target: { checked: true }});
    expect(checkbox).toBeChecked();
  });
})