import scss from "./event-item.module.scss";
import Button from "../ui/Button";
import DateIcon from "../icons/date-icon";
import AddresIcon from "../icons/date-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";

const EventItem = (props) => {
  const { title, image, date, location, id } = props;

  const humanReadableDate = new Date(date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const formattedAddress = location.replace(", ", "\n");

  const exploreLink = `/events/${id}`;

  return (
    <li className={scss.item}>
      <img src={`/${image}`} alt="img" />
      <div className={scss.content}>
        <div className={scss.summary}>
          <h2>{title}</h2>
          <div className={scss.date}>
            <DateIcon />
            <time>{humanReadableDate}</time>
          </div>
          <div className={scss.address}>
            <AddresIcon />
            <address>{formattedAddress}</address>
          </div>
        </div>
        <div className={scss.actions}>
          <Button link={exploreLink}>
            <span>Explore Event</span>
            <span className={scss.icon}>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
};

export default EventItem;
