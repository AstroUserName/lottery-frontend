import enterRaffleStyles from "../src/styles/EnterRaffle.module.css"

const RaffleDescription = () => {
    return (
        <div className={enterRaffleStyles.card}>
            <p className={enterRaffleStyles.description}>Автономная лотерея</p>
            <p className={enterRaffleStyles.breakLine}>
                Powered by Chainlink's VRF and Automation
            </p>
            <a
                href="https://github.com/smartcontractkit/documentation"
                target="_blank"
                className={enterRaffleStyles.documentation}
            >
                GitHub <img src="../external-link.png" />
            </a>
        </div>
    )
}

export default RaffleDescription
