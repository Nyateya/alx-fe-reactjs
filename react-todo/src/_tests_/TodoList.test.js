import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";
import React from "react";

test("renders todo items", () => {
  const todos = [
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write Tests", completed: true },
  ];

  render(<TodoList todos={todos} onToggle={() => {}} onDelete={() => {}} />);

  const todoItems = screen.getAllByRole("listitem");
  expect(todoItems).toHaveLength(todos.length);

  expect(screen.getByText("Learn React")).toBeInTheDocument();
  expect(screen.getByText("Write Tests")).toBeInTheDocument();
});

test("calls onToggle when todo is clicked", () => {
  const todos = [{ id: 1, text: "Learn React", completed: false }];
  const onToggle = jest.fn();

  render(<TodoList todos={todos} onToggle={onToggle} onDelete={() => {}} />);

  fireEvent.click(screen.getByText("Learn React"));
  expect(onToggle).toHaveBeenCalledWith(1);
});

test("calls onDelete when delete button is clicked", () => {
  const todos = [{ id: 1, text: "Learn React", completed: false }];
  const onDelete = jest.fn();

  render(<TodoList todos={todos} onToggle={() => {}} onDelete={onDelete} />);

  fireEvent.click(screen.getByText("Delete"));
  expect(onDelete).toHaveBeenCalledWith(1);
});
