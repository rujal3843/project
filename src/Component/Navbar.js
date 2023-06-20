import React from 'react';
import { FaSearch } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  IconButton,
  Avatar,
  Typography,
  Badge,
  Button
} from "@material-tailwind/react";
import { BellIcon } from "@heroicons/react/24/solid";
import {
  ClockIcon,
  Cog6ToothIcon,
  PowerIcon,
  InboxArrowDownIcon,
  UserCircleIcon,
  LifebuoyIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center mt-2 sticky top-0 z-10 bg-white">
      <h1 className="font-bold text-3xl">Dashboard</h1>

      <div className="flex gap-7">

        <div>
          <form className="flex shadow-md p-1 rounded items-center">
            <input
              type="text"
              placeholder="Search here"
              className="outline-none p-2 "
            />
            <FaSearch className="text-xl text-[blue]" />
          </form>
        </div>




        <div>
          <Menu>
            <MenuHandler>
              <IconButton variant="text">
                <Badge color="red">
                  <Button>
                    <BellIcon className="h-5 w-5" />
                  </Button>
                </Badge>
              </IconButton>
            </MenuHandler>
            <MenuList className="flex flex-col gap-2">
              <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                <Avatar
                  variant="circular"
                  alt="candice wu"
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                />
                <div className="flex flex-col gap-1">
                  <Typography variant="small" color="gray" className="font-normal">
                    <span className="font-medium text-blue-gray-900">Wu</span> sent you a message
                  </Typography>
                  <Typography variant="small" className="flex items-center gap-1 text-xs text-gray-600">
                    <ClockIcon className="h-3 w-3" />
                    13 minutes ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                <Avatar
                  variant="circular"
                  alt="natali craig"
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1061&q=80"
                />
                <div className="flex flex-col gap-1">
                  <Typography variant="small" color="gray" className="font-normal">
                    <span className="font-medium text-blue-gray-900">Natali</span> replied to your email
                  </Typography>
                  <Typography variant="small" className="flex items-center gap-1 text-xs text-gray-600">
                    <ClockIcon className="h-3 w-3" />a hour ago
                  </Typography>
                </div>
              </MenuItem>
              <MenuItem className="flex items-center gap-4 py-2 pr-8 pl-2">
                <Avatar
                  variant="circular"
                  alt="paypal"
                  src="https://dwglogo.com/wp-content/uploads/2016/08/PayPal_Logo_Icon.png"
                />
                <div className="flex flex-col gap-1">
                  <Typography variant="small" color="gray" className="font-normal">
                    <span className="font-medium text-blue-gray-900">PayPal</span> you've received a payment.
                  </Typography>
                  <Typography variant="small" className="flex items-center gap-1 text-xs text-gray-600">
                    <ClockIcon className="h-3 w-3" />5 hours ago
                  </Typography>
                </div>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>

        <div>
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
        </div>

        <div className=''>
          <Menu>
            <MenuHandler>
              <Avatar
                variant="circular"
                alt="candice wu"
                className="cursor-pointer"
                src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
              />
            </MenuHandler>
            <MenuList>
              <MenuItem className="flex items-center gap-2">
                <UserCircleIcon strokeWidth={2} className="h-4 w-4" />
                <Typography variant="small" className="font-normal">
                  My Profile
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-2">
                <Cog6ToothIcon strokeWidth={2} className="h-4 w-4" />
                <Typography variant="small" className="font-normal">
                  Edit Profile
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-2">
                <InboxArrowDownIcon strokeWidth={2} className="h-4 w-4" />
                <Typography variant="small" className="font-normal">
                  Inbox
                </Typography>
              </MenuItem>
              <MenuItem className="flex items-center gap-2">
                <LifebuoyIcon strokeWidth={2} className="h-4 w-4" />
                <Typography variant="small" className="font-normal">
                  Help
                </Typography>
              </MenuItem>
              <hr className="my-2 border-blue-gray-50" />
              <MenuItem className="flex items-center gap-2">
                <PowerIcon strokeWidth={2} className="h-4 w-4" />
                <Typography variant="small" className="font-normal">
                  Sign Out
                </Typography>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
