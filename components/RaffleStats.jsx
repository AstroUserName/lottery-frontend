import enterRaffleStyles from "../src/styles/EnterRaffle.module.css"

function RaffleStats({
    entranceFee,
    numberOfPlayers,
    recentWinner,
    raffleState,
}) {
    const styles = {
        width: "15px",
        height: "15px",
        borderRadius: "50%",
        backgroundColor: raffleState === "0" ? "green" : "red",
        display: "inline-block",
    }

    return (
        <div className={enterRaffleStyles.cardStats}>
            <a href="https://www.ethereum.org/" target="_blank">
                <img
                    className={enterRaffleStyles.mainLogo}
                    src="../images/ethereum-logo.png"
                />
            </a>
            <p>
                Статус лотереи:{" "}
                <span className={enterRaffleStyles.grey}>
                    {raffleState === "0" ? "Открыт" : "Закрыт"}
                </span>{" "}
                <span
                    className={
                        raffleState === "0"
                            ? enterRaffleStyles.animationOpen
                            : enterRaffleStyles.animationClose
                    }
                    style={styles}
                ></span>
            </p>
            <p>
                Входной платеж:{" "}
                <span className={enterRaffleStyles.grey}>
                    {entranceFee} ETH
                </span>
            </p>
            <p>
                Текущий баланс:{" "}
                <span className={enterRaffleStyles.grey}>
                    {numberOfPlayers * Number(entranceFee)} ETH
                </span>
            </p>
            <p>
                Количество участников:{" "}
                <span className={enterRaffleStyles.grey}>
                    {numberOfPlayers}
                </span>
            </p>
            <p>
                Необходимое кол-во участников:
                <span className={enterRaffleStyles.grey}> 5</span>
            </p>
            <p>
                Недавний победитель:{" "}
                <span className={enterRaffleStyles.grey}>{recentWinner}</span>
            </p>
        </div>
    )
}

export default RaffleStats
