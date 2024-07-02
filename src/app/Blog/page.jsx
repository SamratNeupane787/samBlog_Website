import CardList from "../components/cardList/CardList.jsx";
import styles from "./blogPage.module.css";
import Menu from "../components/Menu/Menu.jsx";

const BlogPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Blog</h1>
      <div className={styles.content}>
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
