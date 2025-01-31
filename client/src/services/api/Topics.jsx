const URL = "http://localhost:3002/topics/";

export const getTopics = async () => {
  try {
    const response = await fetch(`${URL}`);
    const topics = await response.json();
    return topics;
  } catch (error) {
    console.log(error);
  }
};
