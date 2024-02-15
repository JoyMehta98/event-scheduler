import { EventPriority } from "./constants";

export const getDateTime = (dateString: string) => {
  const date = new Date(dateString).getDate();
  const month = new Date(dateString).getMonth() + 1;
  const year = new Date(dateString).getFullYear();
  const hours = new Date(dateString).getHours();
  const minutes = new Date(dateString).getMinutes();

  const m = month > 9 ? month : `0${month}`;

  return {
    date: `${year}-${m}-${date}`,
    time: `${hours}:${minutes}`,
  };
};

export const eventColor = (priority: EventPriority) => {
  switch (priority) {
    case EventPriority.high:
      return "green";

    case EventPriority.medium:
      return "orange";

    default:
      return "blue";
  }
};
