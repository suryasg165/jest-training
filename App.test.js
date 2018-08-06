import React from "react";
import App, { Sample } from "./App";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const component = shallow(<App />);
  expect(component).toMatchSnapshot();
});

it("renders without crashing", () => {
  const component = shallow(<Sample />);
  expect(component).toMatchSnapshot();
});
