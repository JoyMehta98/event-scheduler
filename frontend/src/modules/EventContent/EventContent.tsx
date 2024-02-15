interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  calenderData: any;
  handleShowManageEvent: (date: string) => void;
  setEventId: (id: string) => void;
}

export const EventContent = ({
  calenderData,
  handleShowManageEvent,
  setEventId,
}: Props) => (
  <span
    onClick={() => {
      setEventId(calenderData.event.id);
      handleShowManageEvent(calenderData.event.startStr);
    }}
  >
    {calenderData.event.title}
  </span>
);
