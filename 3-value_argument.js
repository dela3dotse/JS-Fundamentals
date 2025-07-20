const args = ["Hello", "World"]; 

  if (!args[0]) {
    console.log("No argument");
  } else if (args[0] && !args[1]) {
    console.log("Argument found");
  } else {
    console.log("Arguments found");
  }
