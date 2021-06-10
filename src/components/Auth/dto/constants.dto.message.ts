export const dtoMessage = {
  signUpDto: {
    login: {
      length: {
        min: "Login must be 5 or more characters long",
        max: "Login must be 5 or fewer characters long",
      },
    },
    name: {
      length: {
        min: "Name must be 2 or more characters long",
        max: "Name must be 2 or fewer characters long",
      },
    },
    password: {
      length: {
        min: "Password must be 5 or more characters long",
        max: "Password must be 5 or fewer characters long",
      },
    },
  },
};
