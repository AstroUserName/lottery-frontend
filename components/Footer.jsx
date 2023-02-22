import Link from "next/link"
import footerStyles from "../src/styles/Footer.module.css"

const Footer = () => {
    return (
        <div className={footerStyles.footer}>
            <div className={footerStyles.descriptionWrapper}>
                <p className={footerStyles.description}>Frontend</p>
                <a
                    href="https://github.com/AstroUserName/lottery-frontend"
                    target="_blank"
                >
                    <img src="../images/github-logo.png" />
                </a>
            </div>
            <div className={footerStyles.descriptionWrapper}>
                <p className={footerStyles.description}>Smart Contract</p>
                <a
                    href="https://github.com/AstroUserName/raffle-lottery"
                    target="_blank"
                >
                    <img src="../images/github-logo.png" />
                </a>
            </div>
            <div className={footerStyles.descriptionWrapper}>
                <p className={footerStyles.description}>Telegram</p>
                <a href="https://t.me/soundsverybad" target="_blank">
                    <img src="../images/telegram-logo.png" />
                </a>
            </div>
        </div>
    )
}

export default Footer
