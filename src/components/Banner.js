import { Component } from 'react';
import styles from '../assets/Styles/components/Banner.module.css';

class Banner extends Component {
  render() {
    return this.props.page === "home" ? 
    (
      <div className={styles.banner}>
        <div className={styles.bannerHome} />
        <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
      </div>
    ) : (
      <div className={styles.banner}>
        <div className={styles.bannerAbout} />
      </div>
    );
  };
};

export default Banner;

