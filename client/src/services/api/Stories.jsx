const URL = "http://localhost:3002/stories/";

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

export const fetchStoriesByWeek = async (week) => {
  try {
    const response = await fetch(`${URL}/week/${week}`);

    const stories = await response.json();

    return stories;
  } catch (error) {
    console.log(error);
  }
};

export const fetchStoryById = async (id) => {
  try {
    const response = await fetch(`${URL}story/${id}`);
    const story = await response.json();

    return story;
  } catch (error) {
    console.log(error);
  }
};

export const postStory = async (submission) => {
  try {
    const response = await fetch(`${URL}submit/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    });
    const story = await response.json();
    return story;
  } catch (error) {
    console.log(error);
  }
};
