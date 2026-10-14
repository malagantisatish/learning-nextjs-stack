import styles from "./wednesday.module.css";

export default function Page() {
    console.log(styles)
    return (
        <div className={styles.heading}>
            Today is Wednesday
        </div>
    );
}