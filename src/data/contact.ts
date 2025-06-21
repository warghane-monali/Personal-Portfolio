import type { contact } from "../types";
import emailIcon from "../assets/images/email-mail-svgrepo-com.svg";
import gitHubIcon from "../assets/images/github-svgrepo-com.svg";
import linkdinIcon from "../assets/images/linkedin-linked-in-svgrepo-com.svg"

export const contactData : contact[] = [
    {
        id:1,
        contactName : "monaliwarghane97@gmail.com",
        icon : emailIcon,
        link: "mailto:monaliwarghane97@gmail.com"
    },
    {
        id:2,
        contactName : "https://github.com/warghane-monali",
        icon : gitHubIcon,
        link : `https://github.com/warghane-monali`
    },
    {
        id:3,
        contactName : "https://www.linkedin.com/in/monali-bb1756212/",
        icon : linkdinIcon,
        link : `https://www.linkedin.com/in/monali-bb1756212/`
    }
]