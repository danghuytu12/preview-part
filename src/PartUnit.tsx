import React from 'react'
import styles from './styles.module.css'
import progress from '../assets/progress.svg'

const PartUnit = () => {
  return (
    <div>
      <div className={styles.titleChapterRight} style={{ marginTop: 25 }}>
        Learning Outcome
      </div>
      <div style={{ marginBottom: 10 }}>editor</div>
      <div
        className={styles.infoUnit}
        style={{ justifyContent: 'space-between' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <img src={progress} />
          </div>
          <div style={{ marginLeft: 10 }}>
            <img src={progress} />
          </div>
          <div style={{ marginLeft: 10 }} className={styles.titleLearning}>
            Name
          </div>
        </div>
        <div className={styles.timeUnit}>21m</div>
      </div>
      <div
        className={styles.infoUnit}
        style={{ justifyContent: 'space-between' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <img src={progress} />
          </div>
          <div style={{ marginLeft: 10 }}>
            <img src={progress} />
          </div>
          <div style={{ marginLeft: 10 }} className={styles.titleLearning}>
            Name
          </div>
        </div>
        <div className={styles.timeUnit}>21m</div>
      </div>
      <div
        className={styles.infoUnit}
        style={{ justifyContent: 'space-between' }}
      >
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <img src={progress} />
          </div>
          <div style={{ marginLeft: 10 }}>
            <img src={progress} />
          </div>
          <div style={{ marginLeft: 10 }} className={styles.titleLearning}>
            Name
          </div>
        </div>
        <div className={styles.timeUnit}>21m</div>
      </div>
    </div>
  )
}

export default PartUnit
