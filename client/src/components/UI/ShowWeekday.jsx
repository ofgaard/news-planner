export const Weekday = ({ date }) => {
  const passedDay = date ? new Date(date) : new Date();
  const day = passedDay.toLocaleString("da-DK", { weekday: "long" });
  const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1);

  return <div className="text-xl font-extrabold">{capitalizedDay}</div>;
};
