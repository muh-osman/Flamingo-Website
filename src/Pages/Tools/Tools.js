import './Tools.css'
import { useState } from 'react'
import ElectronicsRepairToolsItemsData from '../../Data/ToolsData/ElectronicsRepairToolsData'
import { ShelveConainer, ItemShelves, Button } from '../../Components'

const Tools = () => {



  // Hide Big more Button & add components
  const [state, setState] = useState(false)


  // Loop on Data
  const electronicsRepairToolsItems = ElectronicsRepairToolsItemsData.map(item => {
    return <ItemShelves
      className={'item-cards'}
      key={item.id}
      item={item}
    />
  })





  return (
    <>

      <ShelveConainer href='https://www.google.com/' title='Electronics repair tools'>
        {electronicsRepairToolsItems}
      </ShelveConainer>




      {/* Hide Big more Button & add components */}

      {
        state ? (
          <>
            < ShelveConainer href='https://www.google.com/' title='Home tools'>
              { }
            </ShelveConainer>
          </>

        ) : (

          //  <Big More Button 
          <Button onClick={() => setState(true)} className='big-more-btn' title='More' />

        )
      }

    </>
  )
}

export default Tools