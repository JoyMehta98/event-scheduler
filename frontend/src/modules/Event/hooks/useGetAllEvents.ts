import { useCallback, useMemo, useState } from "react";
import { getEvents } from "../api";
import { Events } from "../types";
import { eventColor } from "../util";

export const useGetAllEvents = () => {
  const [result, setResult] = useState<Events[]>([]);

  const allEvents = useCallback(async () => {
    const { data = [] } = await getEvents();

    setResult(data);
  }, []);

  const calenderEvents = useMemo(
    () =>
      result.map((event) => ({
        id: event._id,
        title: event.title,
        start: event.startDate,
        end: event.endDate,
        color: eventColor(event.priority),
      })),
    [result]
  );

  return {
    calenderEvents,
    eventsData: result,
    allEvents,
  };
};
