const URL = "http://localhost:3002/users/";

export const getAllUsers = async () => {
  try {
    const response = await fetch(URL);
    const users = await response.json();
    return users;
  } catch (error) {
    console.log(error);
  }
};
