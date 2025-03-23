const URL = "https://news-planner.onrender.com/stories/";

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

export const fetchStoriesByTopic = async (topic) => {
  try {
    const response = await fetch(`${URL}topic/${topic}`);
    return response;
  } catch (err) {
    console.log(err);
  }
};

export const addStory = async (storyData) => {
  try {
    const response = await fetch(`${URL}submit/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(storyData),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchStory = async (query) => {
  try {
    const response = await fetch(
      `${URL}search/?query=${encodeURIComponent(query)}`
    );
    const result = await response.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

export const deleteStory = async (id) => {
  try {
    const response = await fetch(`${URL}story/${id}`, { method: "DELETE" });
    const result = await response.json();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

export const editStory = async (id, updates) => {
  try {
    const response = await fetch(`${URL}story/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updates),
    });
    if (!response.ok) {
      throw new Error("failed to update");
    }
    const updatedStory = await response.json();
    return updatedStory;
  } catch (error) {
    console.error("error updating", error);
    throw error;
  }
};
