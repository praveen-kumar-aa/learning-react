import React from 'react';
import ReactDOM from 'react-dom';
import Button from "../Button";
import {render} from "@testing-library/react";
import "jest-dom/extend-expect";
import renderer from 'react-test-renderer';
import {cleanup} from "@testing-library/react";

afterEach(cleanup);

it("renderes button without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Button></Button>, div);
});


it("renders correctly", ()=>{
    const {getByTestId} = render(<Button label = "save"></Button>);
    expect(getByTestId('button').toHaveTextContent("save"));
});


it("matches snapshot", ()=>{
    const tree = renderer.create(<Button label="save"></Button>).toJSON();
    expect(tree).toMatchSnapshot();
});
