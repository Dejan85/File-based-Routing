import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventsList";

const EventsPage = () => {
  const events = getAllEvents();

  return (
    <div>
      <EventList items={events} />
    </div>
  );
};

export default EventsPage;
