import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { SidebarData } from "./SidebarData";
import SASC_logo1 from "../Assets/SASC_logo1 - Edited 1.png";

function Sidebar() {
	return (
		<div className="Sidebar">
			<div className="logo">
				<img
					src={SASC_logo1}
					alt=""
				/>
			</div>
			<ul className="SidebarList">
				{SidebarData.map((val, key) => {
					return (
						<li
							key={key}
							className="row">
							<Link
								to={val.path}
								className={
									window.location.pathname === val.path ? "active" : ""
								}>
								<div id="icon">{val.icon}</div>
								<div id="title">
									<span>{val.title}</span>
								</div>
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default Sidebar;
