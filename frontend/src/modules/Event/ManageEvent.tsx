import { useEffect, useState } from "react";
import { EventPriority } from "./constants";
import { useCreateEvent } from "./hooks/useCreateEvent";
import "./style.css";
import { Events } from "./types";
import { getDateTime } from "./util";
import { useUpdateEvent } from "./hooks/useUpdateEvent";
import { useDeleteEvent } from "./hooks/useDeleteEvent";

interface FormValues {
  title: string;
  description: string;
  priority: EventPriority;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
}

interface Props {
  handleHideManageEvent: () => void;
  eventData?: Events;
}

const initialValue = {
  title: "",
  startDate: "",
  startTime: "",
  endDate: "",
  endTime: "",
  priority: EventPriority.high,
  description: "",
};

export const ManageEvent = ({ handleHideManageEvent, eventData }: Props) => {
  const [data, setData] = useState<FormValues>(initialValue);
  const { addEvent } = useCreateEvent();
  const { changeEvent } = useUpdateEvent();
  const { removeEvent } = useDeleteEvent();

  useEffect(() => {
    if (eventData) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { _id, startDate, endDate, ...rest } = eventData;
      const { date: sDate, time: sTime } = getDateTime(startDate);
      const { date: eDate, time: eTime } = getDateTime(endDate);

      setData({
        startDate: sDate,
        startTime: sTime,
        endDate: eDate,
        endTime: eTime,
        ...rest,
      });
    } else {
      setData(initialValue);
    }
  }, [eventData]);

  const handleSave = async () => {
    const { startDate, startTime, endDate, endTime, ...rest } = data;
    const sDate = new Date(`${startDate} ${startTime}`).toISOString();
    const eDate = new Date(`${endDate} ${endTime}`).toISOString();
    if (eventData) {
      await changeEvent(eventData._id, {
        ...rest,
        startDate: sDate,
        endDate: eDate,
      });
    } else {
      await addEvent({ ...rest, startDate: sDate, endDate: eDate });
    }
    handleHideManageEvent();
  };

  const handleDelete = async () => {
    if (eventData) {
      prompt("Are you sure you want to delete it?");
      await removeEvent(eventData._id);
      handleHideManageEvent();
    }
  };

  return (
    <div className="event-form">
      <h2>Manage Event</h2>
      <div className="field-div">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          required
        />
      </div>
      <span>Select Events Date Time</span>
      <div className="date-time">
        <input
          type="date"
          value={data.startDate}
          onChange={(e) => setData({ ...data, startDate: e.target.value })}
          required
        />
        <input
          type="time"
          value={data.startTime}
          onChange={(e) => setData({ ...data, startTime: e.target.value })}
          required
        />
        <input
          type="date"
          value={data.endDate}
          onChange={(e) => setData({ ...data, endDate: e.target.value })}
          required
        />
        <input
          type="time"
          value={data.endTime}
          onChange={(e) => setData({ ...data, endTime: e.target.value })}
          required
        />
      </div>
      <div className="field-div">
        <label htmlFor="priority">Priority</label>
        <select
          id="priority"
          value={data.priority}
          onChange={(e) =>
            setData({ ...data, priority: e.target.value as EventPriority })
          }
        >
          {Object.values(EventPriority).map((priority) => (
            <option key={priority} value={priority}>
              {priority}
            </option>
          ))}
        </select>
      </div>
      <div className="field-div">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          required
        />
      </div>

      <div className="button-div">
        <button type="button" onClick={handleSave}>
          Save
        </button>
        <button type="button" onClick={handleHideManageEvent}>
          Close
        </button>
        {eventData && (
          <button type="button" onClick={handleDelete}>
            Delete
          </button>
        )}
      </div>
    </div>
  );
};
