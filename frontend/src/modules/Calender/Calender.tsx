import { useEffect, useMemo, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { ManageEvent } from "modules/Event/ManageEvent";
import { EventContent } from "modules/EventContent";
import "./style.css";
import { useGetAllEvents } from "modules/Event/hooks/useGetAllEvents";

export const Calender = () => {
  const [currentDate, setCurrentDate] = useState<string>();
  const [eventId, setEventId] = useState<string>();

  const { allEvents, eventsData, calenderEvents } = useGetAllEvents();

  useEffect(() => {
    allEvents();
  }, [currentDate]);

  const handleHideManageEvent = () => {
    setCurrentDate(undefined);
    setEventId(undefined);
  };

  const handleShowManageEvent = (date: string) => {
    setCurrentDate(date);
  };

  const currentEvent = useMemo(
    () => eventsData.find(({ _id }) => _id === eventId),
    [eventsData, eventId]
  );

  return (
    <div className="main-div">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        headerToolbar={{
          left: "prev,next today",
          center: "title",
          right: "dayGridMonth,timeGridWeek,timeGridDay",
        }}
        initialView="dayGridMonth"
        editable
        selectable
        selectMirror
        dayMaxEvents
        weekends
        initialEvents={calenderEvents}
        events={calenderEvents}
        select={(data) => {
          handleShowManageEvent(data.startStr);
          setEventId(undefined);
        }}
        eventContent={(props) => (
          <EventContent
            calenderData={props}
            handleShowManageEvent={handleShowManageEvent}
            setEventId={setEventId}
          />
        )}
      />
      {currentDate && (
        <ManageEvent
          handleHideManageEvent={handleHideManageEvent}
          eventData={currentEvent}
        />
      )}
    </div>
  );
};
