import React from 'react';
import BlogItem from "@/components/blog/blogItem";
import styles from "../../styles/blog.module.css"
const Blog = () => {
    return (
        <div className={styles.blogContainer}>
            <div className={styles.blogContainerText}>
                <div className={styles.page}>
                    <h4>OUR BLOG</h4>
                    <h2>Blog For Travel Updates</h2>
                </div>
            </div>
            <div className={styles.item}>
                <div>
                    <BlogItem/>
                </div>
                <div>
                    <BlogItem/>
                </div>
                <div>
                    <BlogItem/>
                </div>
            </div>
        </div>
    );
};

export default Blog;