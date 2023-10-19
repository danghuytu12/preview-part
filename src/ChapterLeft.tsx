import React from 'react'
import Chapter from './Chapter'
import Progress from './Progress'
import styles from './styles.module.css'

interface IProps {
  activeItem: string | null
  handleClickActive: (item: string | null) => void
}

const items = ['Items1', 'Item 2', 'Items3', 'item4', 'aa']

const ChapterLeft = ({ handleClickActive, activeItem }: IProps) => {
  return (
    <div className={styles.leftColumn}>
      <div className={styles.subColumnPart}>
        <div>
          <div className={styles.titlePart}>
            Part A: Audit framework and regulation
          </div>
          <div className={styles.descriptionPart}>
            An introduction to supply-and-demand and of analysis for customers
            and firms and pro max.
          </div>
          <Progress
            classNameBtn={styles.btnPrimary}
            classNameTitle={styles.timeProgress}
            classNameRemainning={styles.timeRemainning}
            classPercent={styles.percentProgress}
          />
        </div>
      </div>

      {items.map((item) => (
        <Chapter
          key={item}
          handleClickActive={handleClickActive}
          item={item}
          activeItem={activeItem}
        />
      ))}
    </div>
  )
}

export default ChapterLeft
