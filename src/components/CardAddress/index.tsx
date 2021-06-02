import { BsArrowRight } from 'react-icons/bs'
import styles from './styles.module.scss';

interface addressPros {
  location: string,
  city: string
}

export function CardAddress(props: addressPros) {
  return (
    <div className={styles.containerCard}>
      <div className={styles.headingCard}>
        <h3>_nosso <br/>
          <strong>endereço</strong>
        </h3>
      </div>

      <div className={styles.bodyCard}>
        <p>{props.location}</p>
        <p>{props.city}</p>
      </div>

      <button className={styles.buttonCard}>
        <h3>VER MAPA</h3>
      </button>
    </div>
  )
}