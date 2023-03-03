import Banner from "../components/blog/banner";
import styles from '../Blog.module.css';

function Blog() {
  return (
    <div class={'fadein ' + styles.BlogWrapper}>
        <Banner/>
    </div>
  );
}

export default Blog;
