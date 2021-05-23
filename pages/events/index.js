import { getAllEvents } from "../../dummy-data";
import EventList from "../../components/events/EventsList";
import EventsSearch from "../../components/events/EventsSearch";

const EventsPage = () => {
  const events = getAllEvents();

  return (
    <>
      <EventsSearch />
      <EventList items={events} />
    </>
  );
};

export default EventsPage;
