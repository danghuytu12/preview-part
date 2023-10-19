import React from 'react'
import Progress from './Progress'
import styles from './styles.module.css'

const Chapter = ({
  handleClickActive,
  item,
  activeItem
}: {
  handleClickActive: any
  item: string | null
  activeItem: string | null | undefined
}) => {
  return (
    <div
      style={{
        marginTop: 25,
        cursor: 'pointer'
      }}
      onClick={() => handleClickActive(item)}
    >
      <div
        className={
          activeItem === item ? styles.titleChapterActive : styles.titleChapter
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
  )
}

export default Chapter
