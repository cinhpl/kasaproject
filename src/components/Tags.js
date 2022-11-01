import styles from '../assets/Styles/components/Tags.module.css';

export default function Tags({tags}) {
    return (
        <ul className={styles.tags}>
            {tags.map((tags) => (
                <li className={styles.tag} key={tags}>{tags}</li>
            ))}
        </ul>
    );
};
