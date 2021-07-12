import React from 'react'
import './home-sidebar.scss'
import Logo from './moga_logo.png';
import {HomeSidebarLinks} from "./home-sidebar-links";

export default function Sidebar() {

    return (
        <div className={"sidebar-wrapper"}>
            <img src={Logo} alt={"moga logo"} className={"logo"} />

            <HomeSidebarLinks />

        </div>
    )

}