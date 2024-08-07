import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
import { SidebarData } from "./SidebarData";
import SASC_logo1 from "../Assets/SASC_logo1 - Edited 1.png";
import { Link } from 'react-router-dom';


function Sidebar() {
	return (
		<div className="Sidebar">
			<div className="logo">
			<Link to="/"><img
					src={SASC_logo1}
					alt="Stonehaven Amateur Swimming Club Logo"
					width={250}
				/></Link>
			</div>
			<ul className="SidebarList">
				{SidebarData.map((val, key) => {
					return (
						<li
							key={key}
							className="row">
							<NavLink
								to={val.path}
								activeClassName="active"
								className={({ isActive }) => (isActive ? "active" : "")}>
								<div id="icon">{val.icon}</div>
								<div id="title">
									<span>{val.title}</span>
								</div>
							</NavLink>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Sidebar;
