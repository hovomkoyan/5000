import React, {useState} from 'react';
import  styles from "../../styles/app.module.css"
import {AppstoreOutlined, ArrowDownOutlined} from "@ant-design/icons";
import Link from "next/link";
const Header = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);
    const [isBlogListVisible, setBlogListVisible] = useState(false);

    const toggleBlogList = () => {
        setBlogListVisible(!isBlogListVisible);
    };
    const toggleDropdown = () => {
        setDropdownVisible(!isDropdownVisible);
    };
    return (
        <div className={styles.header}>
            <div className={styles.headerContainer}>
                <div className={styles.headerlogo}>
                    <Link href="/" className={styles.headerlogo}>
                        <img src="1.png" alt="chi bacum"/>
                    </Link>
                </div>
                <div className={styles.headerSection}>
                    <ul>
                        <li>Home</li>
                        <li>Tour</li>
                        <li>Destination</li>
                        <li>Pages</li>
                        <li>Elements</li>
                            <Link href={`/blogList`} className={styles.blogList}>
                                <li>Blog</li>
                            </Link>

                        {/*<li className={styles.drbBlog}>*/}
                        {/*    <div onClick={toggleDropdown}>*/}
                        {/*        Blog <ArrowDownOutlined/>*/}
                        {/*    </div>*/}
                        {/*    {isDropdownVisible && (*/}
                        {/*        <div className={styles.drbContent}>*/}
                        {/*            <ul>*/}
                        {/*                <li onClick={toggleBlogList}>*/}
                        {/*                    Blog List*/}
                        {/*                    {isBlogListVisible && (*/}
                        {/*                        <div className={styles.drbList}>*/}
                        {/*                            <ul>*/}
                        {/*                                <li>No Sidebar</li>*/}
                        {/*                                <li>RightSidebar</li>*/}
                        {/*                                <li>Left Sidebar</li>*/}
                        {/*                            </ul>*/}
                        {/*                        </div>*/}
                        {/*                    )}*/}
                        {/*                </li>*/}
                        {/*                <li>Blog Grid</li>*/}
                        {/*                <li>BlogDetails</li>*/}
                        {/*            </ul>*/}
                        {/*        </div>*/}
                        {/*    )}*/}
                        {/*</li>*/}
                        <Link href={`/contact`} className={styles.blogList}>
                            <li>Contact</li>
                        </Link>
                    </ul>
                </div>
            </div>
            <div className={styles.headerEndLanguage}>
                <ul>
                    <li className={styles.lang}>USD <ArrowDownOutlined/>
                        <div className={styles.drb}>
                            <ul>
                                <li>AMD</li>
                                <li>RUB</li>
                                <li>EUR</li>
                            </ul>
                        </div>
                    </li>
                    <li>ENG <ArrowDownOutlined />
                        <div className={styles.drb}>
                            <ul>
                                <li>ARM</li>
                                <li>GEO</li>
                                <li>RUS</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
            <div className={styles.headerEnd}>
                <div className={styles.headerIcon}><AppstoreOutlined/></div>
            </div>
        </div>
    );
};

export default Header;