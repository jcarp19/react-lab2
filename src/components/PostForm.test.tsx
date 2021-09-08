import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PostForm from './PostForm';

test("testing the form", () => {
    const spy1 = jest.fn();
    const spy2 = jest.fn();
    render(<PostForm onClose={spy1} onSubmit={spy2} />);
    // fill out the form
    const title = screen.getByRole("textbox", {name: "title"});
    fireEvent.change(title, {target: {value: "this is a title"}});
    const thought = screen.getByRole("textarea", {name: "thought"});
    fireEvent.change(thought, {target: {value: "this is a thought"}});
    const close = screen.getByRole("button", {name: "close"});
    fireEvent.click(close);
    const submit = screen.getByRole("button", {name: "submit"});
    fireEvent.click(submit);

    expect(spy1).toBeCalled();
    expect(spy2).toBeCalledWith("this is a title", "this is a thought");
});