import Link from "next/link";
import scss from "./main-header.module.css";

const MainHeader = () => {
  return (
    <header className={scss.header}>
      <div className={scss.logo}>
        <Link href="/">NextEvents</Link>
      </div>
      <nav className={scss.navigation}>
        <ul>
          <li>
            <Link href="/events">Browse all events</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
