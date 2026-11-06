import HomeIcon from "@mui/icons-material/Home";
import PoolIcon from "@mui/icons-material/Pool";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import EmailIcon from "@mui/icons-material/Email";
import ArticleIcon from "@mui/icons-material/Article";
import LanguageIcon from "@mui/icons-material/Language";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";

const LOGO_BASE_URL = "https://sel-dev-bucket.s3.us-east-1.amazonaws.com/SASC";

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
    title: "Supporters",
    path: "/supporters",
    icon: <EmojiPeopleIcon />,
    cname: "supporters",
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
  {
    title: "Members Website",
    path: "https://www.members.stonehavenasc.co.uk/page/home",
    icon: <LanguageIcon />,
    cname: "members",
  },
];

export const SupporterData = [
  {
    title: "Asda",
    logo: `${LOGO_BASE_URL}/asda.png`,
  },
  {
    title: "Baxter Foundation",
    logo: `${LOGO_BASE_URL}/baxter-foundation.png`,
  },
  {
    title: "Body Logic Therapies Limited",
    logo: `${LOGO_BASE_URL}/body-logic.png`,
  },
  {
    title: "Bumi Armada UK Limited",
    logo: `${LOGO_BASE_URL}/bumi-armada.png`,
  },
  {
    title: "H&P Inc.",
    logo: `${LOGO_BASE_URL}/hp-inc.png`,
  },
  {
    title: "Rotary Club of Stonehaven",
    logo: `${LOGO_BASE_URL}/lions-club.png`,
  },
  {
    title: "Stonehaven & District Lions Club",
    logo: `${LOGO_BASE_URL}/midsummer-beer-happening.png`,
  },
  {
    title: "Summer Midsummer Beer Happening 2026",
    logo: `${LOGO_BASE_URL}/rotary-club.png`,
  },
];
