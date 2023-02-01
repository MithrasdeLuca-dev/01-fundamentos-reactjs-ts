import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>

      <img className={styles.cover}
        src="https://images.unsplash.com/photo-1605379399843-5870eea9b74e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGRldmVsb3BlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=40"
      />

      <div className={styles.profile}>

        <Avatar src="https://github.com/mithrasdeLuca-dev.png" />

        <strong>Mithras de Luca</strong>
        <span>Web Developer</span>

      </div>

      <footer>
        <a href="#">
          <PencilLine size={20}/>
          Edite seu perfil
        </a>
      </footer>

    </aside>
  );
}
