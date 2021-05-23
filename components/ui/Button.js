import Link from "next/link";
import scss from "./button.module.scss";

const Button = (props) => {
  const { link, children } = props;

  if (props.link) {
    return (
      <Link href={link}>
        <a className={scss.btn}>{children}</a>
      </Link>
    );
  }

  return (
    <button className={scss.btn} onClick={props.onClick}>
      {children}
    </button>
  );
};

export default Button;
