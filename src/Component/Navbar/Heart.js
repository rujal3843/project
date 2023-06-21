import React from 'react'
import { AiOutlineHeart } from "react-icons/ai";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button
} from "@material-tailwind/react";

const Heart = () => {
  return (
    <>
     <Menu>
            <MenuHandler>

              <Button className="p-2">
                <AiOutlineHeart size={20} className="h-5 w-5" />
              </Button>

            </MenuHandler>
            <MenuList>
              <MenuItem>Menu Item 1</MenuItem>
              <MenuItem>Menu Item 2</MenuItem>
              <MenuItem>Menu Item 3</MenuItem>
              <hr className="my-3" />
              <MenuItem>Menu Item 4</MenuItem>
            </MenuList>
          </Menu>
    </>
  )
}

export default Heart