import styles from '../styles/Numero.module.css'
export default function Numero(props) {
    return (
        <div className={styles.numeroDisplay}>
            {props.numero}
        </div>
    )
}