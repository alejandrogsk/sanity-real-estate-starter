'use client'
import FilterBlock from './filter/FilterBlock'
const operationOptions = [
    {label:"For Rent", id:"for-rent"},
    {label:"For Sale", id:"for-sale"},
    
]
const Filter = () => {
  return (
    <div className=' sticky top-[200px] flex flex-col px-[2rem]'>
      <h3 className='text-xl mb-4'>Filter your preferences</h3>
      <FilterBlock  label="Type" valueToFind="operation" options={operationOptions} />
    </div>
  )
}


export default Filter