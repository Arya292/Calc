import styles from '../styles/layout.module.css'
import Button from "./Button";
export default function Home() {
  return (
      <head>
          <title>Calculator</title>
      </head>,
      <div className={styles.container}>
    <div className={styles.calculator} >

        <div className={styles.screen}>
            <text className={styles.ans} id="txt">0</text>
        </div>
        <Button />
    </div>
    </div>
  )
}
