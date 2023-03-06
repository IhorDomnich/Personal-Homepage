import { styleIcon } from "./styled";
import { ReactComponent as GithubIcon } from "./icons/github.svg";
import { ReactComponent as FacebookIcon } from "./icons/facebook.svg";

export const socials = [
    {
        name: "GitHub",
        url: "https://github.com/IhorDomnich",
        Icon: styleIcon(GithubIcon),
    },
    {
        name: "Facebook",
        url: "https://www.facebook.com/domnich.igor",
        Icon: styleIcon(FacebookIcon),
    },
]