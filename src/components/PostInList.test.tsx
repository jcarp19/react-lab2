import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import PostInList from './PostInList';
import  Post from "../models/Post";

test("Sign Up header is on the page.", () => {
    const post: Post = {title: "test", thought: "thought"};
	const spy = jest.fn();
    render(<PostInList post={post} onDelete={spy} />);
	const postTitle = screen.getByText("test");
    const postThought = screen.getByText("thought");
	expect(postTitle).toBeInTheDocument();
	expect(postThought).toBeInTheDocument();
});

test("delete is on the page", () => {
    const post: Post = {title: "test", thought: "thought"};
	const spy = jest.fn();
    render(<PostInList post={post} onDelete={spy} />);
    const btn = screen.getByRole("button", {name: "onDelete"});
    fireEvent.click(btn)
    fireEvent.click(btn)
    expect(spy).toHaveBeenCalled();
})