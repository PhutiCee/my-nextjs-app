import Link from 'next/link'
import Styles from './navbar.module.css'

const listItems = [
    "Home",
    "Users",
    "About",
    "Contacts"
]
export default function Navbar() {
    return (
        <nav className={Styles.nav}>
            <ul className={Styles.list}>
                {listItems.map((item) => (
                    <li key={item} >
                        <Link href={`${item.toLowerCase() === "home" ? "/" : item.toLowerCase()}`} className={Styles.ul}>{item}</Link>
                    </li>
                ))}
            </ul>
        </nav>
    )
}
