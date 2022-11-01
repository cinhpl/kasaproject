import styles from '../assets/Styles/components/Host.module.css';

export default function Host({ host }) {
    return (
      <div className={styles.details}>
        <div className={styles.name}>{host.name}</div>
        <img src={host.picture} alt={host.name} className={styles.portrait} />
      </div>
  );
};