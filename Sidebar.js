import React from "react";
import {FaShoppingCart} from "react-icons/fa";
import {MdDashboardCustomize ,MdOutlineProductionQuantityLimits ,MdDeliveryDining ,MdOutlineSettings} from "react-icons/md";
import './App.css';



function Sidebar({openSidebarToggle, OpenSidebar}) {
    return(
        <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive":"" }>
            <div className="sidebar-title">
                <div className="sidebar-brand">
                    <FaShoppingCart className="icon-header"/>SHOP
                </div>
                <span className="icon close_icon" onClick={OpenSidebar}>X</span>
            </div>

            <ul className="sidebar-list">
                <li className="sidebar-list-item">
                    <a href="#dash">
                        <MdDashboardCustomize className="icon" />Dashboard
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="#product">
                        <MdOutlineProductionQuantityLimits className="icon" />Products Management
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="#order">
                        <MdDeliveryDining className="icon" />Orders Management
                    </a>
                </li>
                <li className="sidebar-list-item">
                    <a href="">
                        <MdOutlineSettings className="icon" />Setting
                    </a>
                </li>
            </ul>
        </aside>
    );
}

export default Sidebar