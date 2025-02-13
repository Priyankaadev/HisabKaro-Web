import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaMinus, FaPlus, FaSearch } from "react-icons/fa"

export function Dropdown() {
  return (
    <div className="rounded-lg border border-green-500 shadow-md  bg-[#f5f8fa]  ">
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="none" >2 items</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-96 " side="top" align="end">
           <div className="search-inp flex gap-1 items-center rounded-xl  px-6">
             <FaSearch size={20} />
             <input
               type="text"
               name="search"
               placeholder="Search Products..."
               className="w-full p-2 bg-[#f5f8fa] rounded-xl outline-none focus:ring-0 focus:border-transparent "
             />
           </div>
           <DropdownMenuItem>2 Items added</DropdownMenuItem>
      
        <DropdownMenuGroup className="flex items-center justify-between">
          <div className="flex flex-col gap-0" > 
         <DropdownMenuItem>
         
           Red Apple
          </DropdownMenuItem>
          <DropdownMenuItem>
            1 kg, Price
          </DropdownMenuItem>
          <DropdownMenuItem>
          &#8377;4.99
          </DropdownMenuItem>
           </div>
           <div className="">
             <button className='flex gap-1 py-2 px-4 items-center bg-blue-500 rounded-lg   text-white'><FaMinus color='white' />1<FaPlus color='white'/></button>
           </div>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup className="flex items-center justify-between"> 
          <div > 
         <DropdownMenuItem>
         
           Red Apple
          </DropdownMenuItem>
          <DropdownMenuItem>
            1 kg, Price
          </DropdownMenuItem>
          <DropdownMenuItem>
          &#8377;4.99
          </DropdownMenuItem>
           </div>
           <div className="">
             <button className='flex gap-1 py-2 px-4 items-center bg-blue-500 rounded-lg   text-white'><FaMinus color='white' />1<FaPlus color='white'/></button>
           </div>
        </DropdownMenuGroup>
       <div className="rounded-xl border border-green-400 p-2 flex flex-col gap-0">
        <DropdownMenuItem  className="flex items-center justify-between"><span>Product 1</span><span> &#8377;4.99</span></DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-between"><span>Product 2</span><span> &#8377;4.99</span></DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-between"><span>Subtotal</span><span> &#8377;9.98</span></DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-between"><span>Discount</span><span> 0</span></DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-between"><span>Tax</span><span> 0</span></DropdownMenuItem>
        <DropdownMenuItem className="flex items-center justify-between py-4 font-bold text-[15px] bg-slate-200"><span>Total Amount</span><span>&#8377;9.98 </span></DropdownMenuItem>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
    </div>
  )
}
