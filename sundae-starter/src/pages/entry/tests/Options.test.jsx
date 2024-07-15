import { render, screen } from "@testing-library/react";
import Options from "../Options";

test("Displays image for each scoop option from server", () => {
  render(<Options optionType="scoops" />);

  const scoopImages = screen.getAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  const altTexts = scoopImages.map((element) => element.alt);
  expect(altTexts).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});
