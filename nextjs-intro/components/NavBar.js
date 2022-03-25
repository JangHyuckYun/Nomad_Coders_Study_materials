import Link from "next/link";
import {useRouter} from "next/router";
import styles from "./NavBar.module.css";

export default function NavBar() {
    const router = useRouter();
    console.log(router);

    return (
        <nav>
            <Link href="/">
                <a className={"asdasd"}>Home</a>
            </Link>
            <Link href="/about">
                <a className={"asd2"}>About</a>
            </Link>
            <style jsx>{`
                 nav {
                  background-color: tomato;
                 }
                 a {
                  text-decoration: none;
                 }
            `}</style>
        </nav>
    );
}