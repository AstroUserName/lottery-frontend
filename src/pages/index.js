import EnterRaffle from "components/EnterRaffle"
import homeStyles from "../styles/Home.module.css"

const Home = () => {
    return (
        <>
            <div className={homeStyles.section}>
                <h1 className={homeStyles.title}>
                    The Decentralized Lottery of the Web3
                </h1>
                <p className={homeStyles.subtitle}>
                    Подключи свой кошелек <br />и испытай удачу
                </p>
                <div className={homeStyles.sectionEnter}>
                    <EnterRaffle />
                </div>
            </div>
        </>
    )
}

export default Home
