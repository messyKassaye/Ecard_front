import DashboardIcon from '@material-ui/icons/Dashboard'
import SettingIcon from '@material-ui/icons/Settings'
import SimcardIcon from '@material-ui/icons/SimCard'
import PlaceIcon from '@material-ui/icons/Place';
import WarningIcon from '@material-ui/icons/Warning';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import React from "react";
import { AttachMoney, LocalMall, Person, PersonAdd } from '@material-ui/icons';
const adminMenu = [
    {
        name:'Dashboard',
        route:'/auth',
        icon:<DashboardIcon/>
    },
    {
        name:'Cards',
        route:'/auth/admin/cards',
        icon:<SimcardIcon/>
    },
    {
        name:'Customers',
        route:'/auth/admin/customers',
        icon:<PersonAdd/>
    },
    {
      name:'Sell and buy',
      route:'/auth/admin/sell_buy',
      icon:<AttachMoney/>
    },

    {
        name:'Packages',
        route:'/auth/admin/packages',
        icon:<LocalMall/>
      },

    {
        name:'Sellers',
        route:'/auth/admin/sellers',
        icon:<Person/>
      },

    {
        name:'Settings',
        route:'/auth/admin/settings',
        icon: <SettingIcon/>,
    },
]

export default adminMenu
