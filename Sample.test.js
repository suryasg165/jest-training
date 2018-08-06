import React from "react";
import { Sample, WELCOME_MSG } from "./App";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });

let component;
describe("<Sample />", () => {
  it("renders", () => {
    component = shallow(<Sample />);
    expect(component).toMatchSnapshot();
  });

  it("should render Text element", () => {
    component = shallow(<Sample />);
    const textElements = component.find("Text");

    expect(textElements).toHaveLength(4);
  });

  it("should render working messsage as first element", () => {
    component = shallow(<Sample />);
    const textElements = component.find("Text");

    expect(textElements).toHaveLength(4);

    expect(textElements.first().props()).toHaveProperty(
      "children",
      WELCOME_MSG
    );
  });
});
