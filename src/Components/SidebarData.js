import HomeIcon from "@mui/icons-material/Home";
import PoolIcon from "@mui/icons-material/Pool";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmailIcon from "@mui/icons-material/Email";

export const SidebarData = [
	{
		title: "Home",
		path: "/",
		icon: <HomeIcon />,
		cname: "home",
	},
	{
		title: "About",
		path: "/about",
		icon: <PoolIcon />,
		cname: "about",
	},
	{
		title: "Events",
		path: "/events",
		icon: <EmojiEventsIcon />,
		cname: "events",
	},
	{
		title: "Contact",
		path: "/contact",
		icon: <EmailIcon />,
		cname: "contact",
	},
];
