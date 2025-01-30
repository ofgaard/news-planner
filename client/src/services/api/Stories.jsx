const URL = "http://localhost:3002/stories/";

export const fetchStoriesByDate = async (
  date = new Date().toISOString().split("T")[0]
) => {
  const utcDate = new Date(`${date}T00:00:00Z`).toISOString().split("T")[0];
  const response = await fetch(`${URL}${utcDate}`);
  if (!response.ok) {
    throw new Error("Failed to fetch stories");
  }
  const stories = await response.json();
  return stories;
};

export const fetchStoriesByWeek = async (
  startDate = new Date().toISOString().split("T")[0]
) => {
  const response = await fetch(`${URL}week/${startDate}`);
  if (!response.ok) {
    throw new Error("Failed to fetch stories");
  }
  const stories = await response.json();
  return stories;
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
