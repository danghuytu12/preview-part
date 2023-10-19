import * as React from 'react'
import ChapterLeft from './ChapterLeft'
import ChapterRight from './ChapterRight'
import styles from './styles.module.css'

const ExampleComponent = () => {
  const [activeItem, setActiveItem] = React.useState(null)
  console.log(activeItem)

  const handleClickActive = (item: any) => {
    setActiveItem(item)
  }

  return (
    <div className={styles.gridContainer}>
      <ChapterLeft
        handleClickActive={handleClickActive}
        activeItem={activeItem}
      />
      <ChapterRight />
    </div>
  )
}
export default ExampleComponent
