import * as React from 'react'
import ChapterLeft from './ChapterColumnLeft'
import ChapterRight from './ChapterColumnRight'
import styles from './styles.module.css'

const ExampleComponent = () => {
  const [activeItem, setActiveItem] = React.useState<any>(null)

  const handleClickActive = (item: string) => {
    setActiveItem(item)
  }

  return (
    <div className={styles.container}>
      <ChapterLeft
        handleClickActive={handleClickActive}
        activeItem={activeItem}
      />
      <ChapterRight />
    </div>
  )
}
export default ExampleComponent
