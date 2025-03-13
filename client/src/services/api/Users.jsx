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

export const getUserById = async (id) => {
  try {
    const response = await fetch(`${URL}${id}`);
    const user = response.json();
    return user;
  } catch (err) {
    console.log(err);
  }
};

export const getUserStories = async (id) => {
  try {
    const response = await fetch(`${URL}${id}/stories`);
    const stories = response.json();
    return stories;
  } catch (err) {
    console.log(err);
  }
};
