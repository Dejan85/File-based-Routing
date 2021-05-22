import Link from "next/link";
import scss from "./button.module.scss";

const Button = (props) => {
  const { link, children } = props;
  return (
    <Link href={link}>
      <a className={scss.btn}>{children}</a>
    </Link>
  );
};

export default Button;
