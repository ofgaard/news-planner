export const Weekday = () => {
  const day = new Date().toLocaleString("da-DK", { weekday: "long" });
  const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1);

  return <div className="text-xl font-extrabold">{capitalizedDay}</div>;
};
