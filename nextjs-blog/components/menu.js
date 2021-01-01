import Link from "next/link";

const Menu = () => {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="about">Sobre</Link>
      </li>
    </ul>
  );
};

export default Menu;
