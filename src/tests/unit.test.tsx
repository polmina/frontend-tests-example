import '@testing-library/jest-dom'

import { Item, IItem } from "../components/item";
import { render } from "@testing-library/react";

const makeSut = (props: IItem) => {
  return render(<Item image={props.image} name={props.name} />);
};

describe("<Item />", () => {
  test("Should call onClick successfully", () => {
    const props = {
      image: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
      name: "MyId",
    };
    const { container, getByText } = makeSut(props);

    expect(getByText(props.name)).toBeInTheDocument();
    expect(container.querySelector("img")).toHaveAttribute("src", props.image);
  });

  test("Should render as elipsis", async () => {
    const props = {
      image: "https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg",
      name: "ThisIsUnUnnecessarilyLongNameThatShouldNotbeRendered",
    };
    const { getByText } = makeSut(props);
    expect(getByText('ThisI..')).toBeInTheDocument();
  });
});
