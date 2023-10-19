import React from 'react'
import Progress from './Progress'
import styles from './styles.module.css'

interface IProps {
  handleClickActive: (item: string | null) => void
  item: string | null
  activeItem: string | null | undefined
}

const Chapter = ({ handleClickActive, item, activeItem }: IProps) => {
  return (
    <div style={{ display: 'flex' }}>
      {item === activeItem ? (
        <div style={{ background: '#ffd700', width: 6, margin: '15px 0px' }} />
      ) : null}

      <div
        className={
          item === activeItem ? styles.subColumnActive : styles.subColumn
        }
      >
        <div
          style={{
            cursor: 'pointer'
          }}
          onClick={() => handleClickActive(item)}
        >
          <div
            className={
              activeItem === item
                ? styles.titleChapterActive
                : styles.titleChapter
            }
          >
            Chapter 1: Audit and other assurance engagement
          </div>
          <Progress
            classNameBtn={
              activeItem === item ? styles.btnPrimary : styles.btnSecondary
            }
            classNameTitle={
              activeItem === item
                ? styles.timeProgress
                : styles.timeProgressSecondary
            }
            classNameRemainning={styles.timeRemainningSecondary}
            classPercent={
              activeItem === item
                ? styles.percentProgress
                : styles.percentProgressSecondary
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Chapter
