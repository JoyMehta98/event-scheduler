import {
  deleteRequest,
  getRequest,
  postRequest,
  putRequest,
} from "services/axios";
import { Events } from "./types";

export const getEvents = async () =>
  getRequest<{ data: Events[] }>({ url: "events" });

export const createEvent = async (payload: Omit<Events, "_id">) =>
  postRequest<{ data: Events }>({
    url: "events",
    data: payload,
  });

export const updateEvent = async (id: string, payload: Partial<Events>) =>
  putRequest<{ data: Events }>({
    url: `events/${id}`,
    data: payload,
  });

export const deleteEvent = async (id: string) =>
  deleteRequest({
    url: `events/${id}`,
  });
