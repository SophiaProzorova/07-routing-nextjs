import Link from "next/link";
import css from "./Home.module.css";

const HomePage = () => {
  return (
    <div className={css.main}>
      <div className={css.container}>
        <h1 className={css.title}>NoteHub</h1>
        <p className={css.description}>
          Create, search, and organize your notes in one place.
        </p>
        <Link href="/notes">Go to Notes</Link>
      </div>
    </div>
  );
};

export default HomePage;
