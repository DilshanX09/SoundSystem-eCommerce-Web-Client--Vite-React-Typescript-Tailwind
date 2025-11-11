import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { useState } from 'react';
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';

type DropdownComponentProps = {
     list: { id: number | string, value: string }[],
}

const DropdownComponent = ({ list }: DropdownComponentProps) => {

     const [dropdownIsOpen, setDropdownIsOpen] = useState<boolean>(false);

     return (
          <div>
               <Menu __demoMode>

                    <MenuButton onClick={() => { setDropdownIsOpen(true) }}>
                         <HiOutlineBars3BottomRight className='text-2xl mt-1 cursor-pointer' />
                    </MenuButton>

                    {dropdownIsOpen && (
                         <MenuItems
                              transition
                              anchor="bottom end"
                              className="w-52 mt-3 origin-top-right rounded-md border bg-white border-[#e4e4e4] p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:--spacing(1)] focus:outline-none data-closed:scale-95 data-closed:opacity-0 font-inter-regular"
                         >

                              {list.map((item, index) => {
                                   return (
                                        <MenuItem key={index} >
                                             <button className="group flex w-full items-center gap-2 rounded-lg px-3 py-1.5 data-focus:bg-gray-50">
                                                  <p>{item.value}</p>
                                             </button>
                                        </MenuItem>
                                   )
                              })}
                         </MenuItems>
                    )}
               </Menu>
          </div>
     )
}

export default DropdownComponent;