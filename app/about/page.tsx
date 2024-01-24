import Styles from "./styles.module.css";
import Link from "next/link";

export default function About() {
    return (
        <div className={Styles.main}>
            <h1>About</h1>
            <Link href={"/"} className={Styles.button}>Home</Link>
        </div>
    )
}
