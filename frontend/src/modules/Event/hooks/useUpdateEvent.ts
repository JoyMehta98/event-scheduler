import { useCallback } from "react";
import { Events } from "../types";
import { updateEvent } from "../api";

export const useUpdateEvent = () => {
  const changeEvent = useCallback(async (id: string, body: Partial<Events>) => {
    await updateEvent(id, body);
  }, []);

  return {
    changeEvent,
  };
};
