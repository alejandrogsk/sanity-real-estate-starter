import { Property } from '@/types/Property';
import PropertyCard from './PropertyCard';
const ProperiesGrid = ({properties, title}:{properties: Property[], title?: string}) => {
  return (
    <div className='w-full bg-gray-100 flex flex-col justify-center items-center 
    py-12 md:py-36 
    px-2 md:px-12
    '>
        {title && <h2 className='text-3xl font-medium mb-8'>{title}</h2>}

        {
          (Array.isArray(properties) && properties.length > 0) ?

        <ul className='grid grid-cols-1 md:grid-cols-3 gap-4 w-full'>
        {
          properties.map((element:Property) => <PropertyCard property={element} />)
        }
    </ul> : <p>Sorry, no result can be found</p>
        }
    </div>
  )
}

export default ProperiesGrid
