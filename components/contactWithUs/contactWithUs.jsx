import React from 'react';
import styles from "../../styles/contact.module.css"
import {FacebookOutlined, InstagramOutlined, YoutubeOutlined} from "@ant-design/icons";
import {Input, Select,} from 'antd';
import Button from "@/components/button/button";

const { TextArea } = Input;
const ContactWithUs = () => {
    return (
        <div className={styles.cotactBox}>
            <div className={styles.cotactBoxText}>
                <span className={styles.cotntactSpan}>Contact US</span>
                <div className={styles.cotactBoxGet}>
                    <h3>Get 100% Free Course Contact</h3>
                    <h3>With Us!</h3>
                    <div className={styles.cotactBoxGetP}>
                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit massa mi.</p>
                        <p>Aliquam hendrerit urna pellentesque</p>
                    </div>
                    <div className={styles.cotactBoxGetBottom}></div>
                </div>
                <div className={styles.cotactUs}>
                    <span>Follow Us here</span>
                    <div className={styles.cotactUsIcons}>
                        <div className={styles.cotactUsIconsFacebook}>
                            <FacebookOutlined/>
                        </div>
                        <div className={styles.cotactUsIconsInstagram}>
                            <InstagramOutlined />
                        </div>
                        <div className={styles.cotactUsIconsYoutube}>
                            <YoutubeOutlined />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cotactBoxWithUs}>
                <div className={styles.cotactBoxInput}>
                    <h5>Drop Us a Line...</h5>
                    <div className={styles.input}>
                        <Input style={{width: '400px', height: '50px'}} placeholder="full Name"/>
                    </div>
                    <div className={styles.inputEmail}>
                        <Input style={{width: '400px', height: '50px'}} placeholder="Your Email" type='email'/>
                    </div>
                    <div className={styles.inputSelect}>
                        <Select style={{width: '400px', height: '50px'}}>
                            <option value="1">Skydrive</option>
                            <option value="2">Wild Tour</option>
                            <option value="3">City Tour</option>
                        </Select>
                    </div>
                    <div className={styles.inputMessage}>
                        <TextArea placeholder='Message' rows={4} />
                    </div>
                    <div className={styles.checkBox}>
                        <Input type="checkbox"/>
                        <div className={styles.cotactBoxSpan}>
                            <span> I agree to all terms and policies</span>
                        </div>
                    </div>
                    <Button>Sent Now</Button>
                </div>
            </div>
        </div>
    );
};

export default ContactWithUs;