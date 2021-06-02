import { BsArrowRight } from 'react-icons/bs'
import styles from './styles.module.scss';

interface butonProps {
  title: string
}

export function ButtonCourses(props: butonProps) {
  return (
    <div className={styles.containerBtn}>
      <div>
        <h5>
          {props.title}
        </h5>
      </div>
      <BsArrowRight 
        size={28}
        style={{marginLeft: 20}}
      />
    </div>
  )
}