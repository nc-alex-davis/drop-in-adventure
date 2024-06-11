import inquirer from "inquirer";

function handleError(error) {
  console.log("Something went wrong: ", console.debug(error.message));
  inquirer
    .prompt([
      {
        type: "confirm",
        name: "retry",
        message: "Do you want to retry?",
        default: "y",
      },
    ])
    .then((response) => {
      if (response.retry) startChapter1();
      else endAdventure();
    });
}
export default handleError;
