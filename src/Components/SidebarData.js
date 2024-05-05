import HomeIcon from "@mui/icons-material/Home";
import PoolIcon from "@mui/icons-material/Pool";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from '@mui/icons-material/Article';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';

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
		title: "Events / News",
		path: "/events",
		icon: <EmojiEventsIcon />,
		cname: "events",
	},
	{
		title: "People",
		path: "/people",
		icon: <PeopleOutlineIcon />,
		cname: "people",
	},
	{
		title: "Links",
		path: "/links",
		icon: <ArticleIcon />,
		cname: "links",
	},
	{
		title: "Contact",
		path: "/contact",
		icon: <EmailIcon />,
		cname: "contact",
	},
];
