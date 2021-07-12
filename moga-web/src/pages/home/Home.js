import React from "react";
import './assets/Home.scss'
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import HomeBgr from "./assets/background/HomeBgr";
import Sidebar from "./assets/sidebar/home-sidebar";

export default function Home() {

    return (
        <div className={"page-wrapper"}>

            <Sidebar />
            <HomeBgr />

        </div>
    )
}