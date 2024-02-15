import { useCallback } from "react";
import { deleteEvent } from "../api";

export const useDeleteEvent = () => {
  const removeEvent = useCallback(async (id: string) => {
    await deleteEvent(id);
  }, []);

  return {
    removeEvent,
  };
};
