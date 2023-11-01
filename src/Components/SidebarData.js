import HomeIcon from "@mui/icons-material/Home";
import PoolIcon from "@mui/icons-material/Pool";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmailIcon from "@mui/icons-material/Email";

export const SidebarData = [
	{
		title: "Home",
		path: "/",
		icon: <HomeIcon />,
		cName: "nav-text",
	},
	{
		title: "About",
		path: "/about",
		icon: <PoolIcon />,
		cName: "nav-text",
	},
	{
		title: "Events",
		path: "/events",
		icon: <EmojiEventsIcon />,
		cName: "nav-text",
	},
	{
		title: "Contact",
		path: "/contact",
		icon: <EmailIcon />,
		cName: "nav-text",
	},
];
