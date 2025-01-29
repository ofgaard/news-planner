export const DayOfWeek = ({ date, textSize = "text-xl" }) => {
  const passedDay = date ? new Date(`${date}T12:00:00`) : new Date();
  const day = passedDay.toLocaleString("en-UK", { weekday: "long" });
  const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1);

  return <div className={`${textSize} font-extrabold`}>{capitalizedDay}</div>;
};
