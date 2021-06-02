import { FaChevronDown } from 'react-icons/fa'
import styles from './styles.module.scss';

export function Button() {
  return (
    <button className={styles.containerBtn}>
      <h4>
        INSCREVA-SE!
      </h4>
      <FaChevronDown 
        size={24}
      />
    </button>
  )
}