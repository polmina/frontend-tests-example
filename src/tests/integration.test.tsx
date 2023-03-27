import '@testing-library/jest-dom'

import { App } from "../App";
import { render } from "@testing-library/react";
import axios from "axios";
import { CatsServiceMock } from "./__mocks__/cats-service";

jest.mock("axios");

const makeSut = () => {
  return render(<App />);
};

describe("<App />", () => {
  test("Should render as intented", async () => {
    jest.spyOn(axios, "get").mockResolvedValueOnce(CatsServiceMock.getAll());

    const { getByText, findByText } = makeSut();

    expect(getByText("Loading...")).toBeInTheDocument();

    expect(await findByText("1kl")).toBeInTheDocument();
  });
});
