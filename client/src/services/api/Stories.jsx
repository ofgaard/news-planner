const URL = "http://localhost:3002/stories/";

export const fetchStories = async () => {
  const response = await fetch(URL);

  const storiesPage = await response.json();
};

export const fetchStoriesByDay = async (day) => {
  try {
    const date = day || new Date().toISOString().split("T")[0];
    console.log(date);

    const response = await fetch(`${URL}${date}`);

    const stories = await response.json();

    return stories;
  } catch (error) {
    console.error(error);

    return [];
  }
};
