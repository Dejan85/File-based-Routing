import EventItem from "./EventItem";
import scss from "./event-list.module.scss";

const EventsList = (props) => {
  const { items } = props;

  return (
    <ul className={scss.list}>
      {items.map(({ title, image, date, location, id }) => (
        <EventItem
          key={id}
          title={title}
          image={image}
          date={date}
          location={location}
          id={id}
        />
      ))}
    </ul>
  );
};

export default EventsList;
