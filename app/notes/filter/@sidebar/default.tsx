import { NOTE_CATEGORIES } from "@/lib/constants";
import css from "./Sidebar.module.css";
import Link from "next/link";

const NotesSidebar = () => {
    const categories = NOTE_CATEGORIES;

    return (
        <ul className={css.menuList}>
            <li className={css.menuItem}>
                <Link href={`/notes/filter/all`} className={css.menuLink}>
                    All notes
                </Link>
            </li>
            {categories.map((category) => (
                <li className={css.menuItem} key={category.id}>
                    <Link href={`/notes/filter/${category.id}`} className={css.menuLink}>
                        {category.name}
                    </Link>
                </li>
            ))}
        </ul>
    )
};

export default NotesSidebar;
