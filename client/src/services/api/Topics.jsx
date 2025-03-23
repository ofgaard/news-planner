const URL = "https://news-planner.onrender.com/topics/";

export const getTopics = async () => {
  try {
    const response = await fetch(`${URL}`);
    const topics = await response.json();
    return topics;
  } catch (error) {
    console.log(error);
  }
};
