import Link from "next/link"
import {FaGithub, FaLinkedinIn, FaTwitter, FaFacebook, FaInstagram, FaTiktok} from "react-icons/fa";

const socials = [
   {  icon: <FaGithub />, path: "https://craftcodedjobs.github.io"},
   {  icon: <FaLinkedinIn />, path: "https://www.linkedin.com/in/craftcoded-craft-code-a31a87322/"},
   {  icon: <FaTwitter />, path: "http://X.com/craftcodedjobs"},
   {  icon: <FaFacebook />, path: "https://www.facebook.com/profile.php?id=61564407801115"},
   {  icon: <FaInstagram />, path: "https://www.instagram.com/craftcodedjobs?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="},
   {  icon: <FaTiktok />, path: "https://www.tiktok.com/craftcodedjobs"},
]
const Social = ({containerStyles, iconStyles}) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <Link target='_blank' key={index} href={item.path} className={iconStyles}>
                        {item.icon}
                    </Link>
                )
            })}

        </div>
    )
  
    
}

export default Social