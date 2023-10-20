import React from 'react'
import PartUnit from './PartUnit'
import styles from './styles.module.css'
import progress from '../assets/progress.svg'

function ChapterColumnRight() {
  return (
    <div className={styles.columnRight}>
      <div className={styles.infoChapterRight}>editor</div>
      <div className={styles.titleChapterLearning}>Learning Outcome</div>
      <div className={styles.infoUnit}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div>
            <img src={progress} />
          </div>
          <div style={{ marginLeft: 10 }}>
            <img src={progress} />
          </div>
          <div style={{ marginLeft: 10 }} className={styles.titleLearning}>
            Learning Outcome
          </div>
        </div>
        <div className={styles.timeUnit}>21m</div>
      </div>
      <PartUnit />
      <PartUnit />
      <PartUnit />
      <div className={styles.titleChapterRight} style={{ marginTop: 25 }}>
        Learning Outcome
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
            Learning Outcome
          </div>
        </div>
        <div className={styles.timeUnit}>21m</div>
      </div>
    </div>
  )
}

export default ChapterColumnRight
