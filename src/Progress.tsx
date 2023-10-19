import React from 'react'
import styles from './styles.module.css'

interface IProps {
  classNameBtn: string
  classNameTitle: string
  classNameRemainning: string
  classPercent: string
}

const Progress = ({
  classNameBtn,
  classNameTitle,
  classNameRemainning,
  classPercent
}: IProps) => {
  return (
    <div className={styles.progressContainer}>
      <div style={{ height: 6, margin: '3px 0px', background: '#f1f1f1' }}>
        <div style={{ width: '88%', height: 6 }} className={classNameBtn} />
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 5
        }}
      >
        <div style={{ display: 'flex' }}>
          <div className={classNameTitle}>time</div>
          <span className={classNameRemainning}>remainning</span>
        </div>
        <div className={classPercent}>30%</div>
      </div>
    </div>
  )
}

export default Progress
