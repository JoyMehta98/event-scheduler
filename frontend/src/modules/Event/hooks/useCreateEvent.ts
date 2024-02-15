import { useCallback, useState } from "react";
import { Events } from "../types";
import { createEvent } from "../api";

export const useCreateEvent = () => {
  const [result, setResult] = useState<Events>();

  const addEvent = useCallback(async (body: Omit<Events, "_id">) => {
    const { data } = await createEvent(body);

    setResult(data);
  }, []);

  return {
    result,
    addEvent,
  };
};
