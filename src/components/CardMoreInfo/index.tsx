import { FaWhatsapp, FaRegEnvelope } from 'react-icons/fa'
import styles from './styles.module.scss';

interface infoProps {
  whatsapp: string,
  email: string
}

export function CardMoreInfo(props: infoProps) {
  return (
    <div className={styles.containerCard}>

      <div className={styles.headingCard}>
        <h3>_mais <br/>
          <strong>informações</strong>
        </h3>
      </div>

      <div className={styles.bodyCard}>
        <div className={styles.bodyInfo}>
          <FaWhatsapp 
            size={28}
          />
          <p>{props.whatsapp}</p>
        </div>

        <div className={styles.bodyInfo}>
          <FaRegEnvelope 
            size={28}
          />
          <p>{props.email}</p>
        </div>
      </div>
    </div>
  )
}