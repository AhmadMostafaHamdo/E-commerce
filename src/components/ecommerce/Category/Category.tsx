import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { TCategory } from "@customTypes/category";
const { category, categoryImg, categoryTitle } = styles;

function Category({ title, prefix, img }: TCategory) {
  return (
    <div className={category}>
      <Link to={`/categories/products/${prefix}`}>
        <div className={categoryImg}>
          <img src={img} alt={title} />
        </div>
        <div className={categoryTitle}>{title}</div>
      </Link>
    </div>
  );
}

export default Category;
