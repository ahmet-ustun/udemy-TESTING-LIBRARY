import { render , screen} from "../../../test-utils/testing-library-utils.jsx";
import userEvent from "@testing-library/user-event";
import ScoopOption from "../ScoopOption.jsx";

test("Has is-disabled class when incorrect entry is done", async () => {
  const user = userEvent.setup();

  render(<ScoopOption name="Vanilla" imagePath="/images/vanilla.png" />);

  const vanillaInput = screen.getByRole("spinbutton", { name: "Vanilla"})

  await user.clear(vanillaInput)
  await user.type(vanillaInput, "1")

  expect(vanillaInput).not.toHaveClass("is-invalid");

  await user.clear(vanillaInput)
  await user.type(vanillaInput, "-1")

  expect(vanillaInput).toHaveClass("is-invalid");

  await user.clear(vanillaInput)
  await user.type(vanillaInput, "0")

  expect(vanillaInput).not.toHaveClass("is-invalid");

  await user.clear(vanillaInput)
  await user.type(vanillaInput, "11")

  expect(vanillaInput).toHaveClass("is-invalid");
});
