import { useState } from 'react';
import { ChevronUp, ChevronRight } from 'lucide-react';

export default function Dropdown({id, title, description}) {    
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div key={id} className='w-full rounded-[5px] overflow-hidden'>
            <div onClick={() => {setIsOpen(!isOpen)}} className='w-full flex justify-between px-4 py-2 border-b-2  border-gray-300'>
               <h1 className='font-medium text-[20px] max-md:text-[15px] w-[80%]'>{title}</h1> 
               {isOpen ? <ChevronUp className='text-HouseGreen'></ChevronUp> : <ChevronRight className='text-HouseGreen'></ChevronRight>}
            </div>
            
            <div className={`bg-white  overflow-hidden transition-all duration-100 ease-in-out ${isOpen ? " p-6 h-fit border-b-2 border-gray-300" : "p-0 h-0"}`}>
                <p className='text-[12px] text-HouseGreen font-medium'>{description}</p>
            </div>
        </div>
    );
}