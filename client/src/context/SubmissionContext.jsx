import { createContext, useState, useContext } from "react";

const SubmissionContext = createContext(undefined);

export const SubmissionProvider = ({ children }) => {
  const [newStorySubmitted, setNewStorySubmitted] = useState(false);

  return (
    <SubmissionContext.Provider
      value={{ newStorySubmitted, setNewStorySubmitted }}
    >
      {children}
    </SubmissionContext.Provider>
  );
};

export const useSubmission = () => useContext(SubmissionContext);
