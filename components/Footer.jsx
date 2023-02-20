import Link from "next/link"
import footerStyles from "../src/styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <a href="https://github.com/AstroUserName" target="_blank">
                <img src="../images/github-logo.png" />
            </a>
            <a href="https://t.me/super_boss" target="_blank">
                <img src="../images/telegram-logo.png" />
            </a>
        </div>
    )
}

export default Footer
