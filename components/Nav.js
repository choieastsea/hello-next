import Link from "next/link";
import { useRouter } from "next/router";
import style from "../styles/navbar.module.css";
export default function Nav() {
  const router = useRouter();
  return (
    <nav className={`${style.navbar} ${style.margin1}`}>
      <Link href="/">
        <a
          className={`${style.margin1} ${
            router.pathname === "/" ? "active" : ""
          }`}
        >
          Home
        </a>
      </Link>
      <Link href="/about">
        <a
          className={` ${style.margin1} ${
            router.pathname === "/about" ? "active" : ""
          }`}
        >
          About
        </a>
      </Link>
      {/* styled jsx를 이용한 스타일 적용하기 */}
      <style jsx>
        {`
          .active {
            color: red;
            font-weight: bold;
          }
        `}
      </style>
    </nav>
  );
}
