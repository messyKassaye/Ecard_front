import DashboardIcon from '@material-ui/icons/Dashboard'
import SettingIcon from '@material-ui/icons/Settings'
import SimcardIcon from '@material-ui/icons/SimCard'
import PlaceIcon from '@material-ui/icons/Place';
import WarningIcon from '@material-ui/icons/Warning';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import React from "react";
import { AttachMoney, BusinessCenter, LocalMall, Person, PersonAdd, VerifiedUser } from '@material-ui/icons';
import BugReportIcon from '@material-ui/icons/BugReport';
const adminMenu = [
    {
        name:'Dashboard',
        route:'/auth',
        icon:<DashboardIcon/>
    },
    {
        name:'Customers',
        route:'/auth/admin/customers',
        icon:<PersonAdd/>
    },
    {
      name:'Companies',
      route:'/auth/admin/companies',
      icon:<BusinessCenter/>
  },

    {
      name:'Verfied customers',
      route:'/auth/admin/verified_customers',
      icon:<VerifiedUser/>
  },

    {
      name:'Spam reports',
      route:'/auth/admin/spams',
      icon:<BugReportIcon/>
  },
    
    {
        name:'Settings',
        route:'/auth/admin/settings',
        icon: <SettingIcon/>,
    },
]

export default adminMenu
