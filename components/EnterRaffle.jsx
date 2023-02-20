import { useEffect, useState } from "react"
import { useMoralis, useWeb3Contract } from "react-moralis"
import { ethers } from "ethers"
import { abi, contractAddresses } from "../constants"
import Logos from "./Logos"
import RaffleStats from "./RaffleStats"
import ToastNotification from "./Notification"
import enterRaffleStyles from "../src/styles/EnterRaffle.module.css"
import RaffleDescription from "./RaffleDescription"

const EnterRaffle = () => {
    const [on, setOn] = useState(false)
    const [entranceFee, setEntranceFee] = useState("0")
    const [numberOfPlayers, setNumberOfPlayers] = useState("0")
    const [recentWinner, setRecentWinner] = useState("0")
    const [raffleState, setRaffleState] = useState("0")
    const formattedEntranceFee = ethers.utils.formatUnits(entranceFee, "ether")
    const formattedRecentWinner = `${recentWinner.slice(
        0,
        5
    )}...${recentWinner.slice(recentWinner.length - 3)}`

    const supportedChains = ["5", "31337"]
    const { chainId: chainIdHex, enableWeb3, isWeb3Enabled } = useMoralis()
    const chainId = parseInt(chainIdHex)
    const raffleAddress =
        chainId in contractAddresses ? contractAddresses[chainId][0] : null

    const {
        runContractFunction: enterRaffle,
        isLoading,
        isFetching,
    } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: "enterRaffle",
        params: {},
        msgValue: entranceFee,
    })

    const { runContractFunction: getEntranceFee } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: "getEntranceFee",
        params: {},
    })

    const { runContractFunction: getNumberOfPlayers } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: "getNumberOfPlayers",
        params: {},
    })

    const { runContractFunction: getRecentWinner } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: "getRecentWinner",
        params: {},
    })

    const { runContractFunction: getRaffleState } = useWeb3Contract({
        abi,
        contractAddress: raffleAddress,
        functionName: "getRaffleState",
        params: {},
    })

    const updateUI = async () => {
        const entranceFeeFromContractCall = (await getEntranceFee()).toString()
        const numberOfPlayersFromContractCall = (
            await getNumberOfPlayers()
        ).toString()
        const recentWinnerFromContractCall = (
            await getRecentWinner()
        ).toString()
        const raffleStateFromContractCall = (await getRaffleState()).toString()
        console.log(
            `Raffle state from contract: ${raffleStateFromContractCall}`
        )
        setEntranceFee(entranceFeeFromContractCall)
        setNumberOfPlayers(numberOfPlayersFromContractCall)
        setRecentWinner(recentWinnerFromContractCall)
        setRaffleState(raffleStateFromContractCall)
    }

    useEffect(() => {
        if (isWeb3Enabled) {
            updateUI()
        }
    }, [isWeb3Enabled])

    const handleSuccess = async (tx) => {
        try {
            await tx.wait(1)
            updateUI()
            checkEvents()
        } catch (error) {
            console.error(error)
        }
    }

    const checkEvents = async () => {
        const provider = await enableWeb3()
        const raffle = new ethers.Contract(raffleAddress, abi, provider)

        raffle.on("RaffleEnter", () => setOn(true))
        raffle.on("RequestedRaffleWinner", () => updateUI())
        raffle.on("WinnerPicked", () => updateUI())
    }

    const closeNotification = () => {
        setOn(false)
    }

    return (
        <div>
            <ToastNotification closeNotification={closeNotification} on={on} />
            <div className={enterRaffleStyles.enterRaffleWrapper}>
                {supportedChains.includes(chainId.toString()) ? (
                    <div className={enterRaffleStyles.cta}>
                        <button
                            onClick={async () => {
                                await enterRaffle({
                                    // this onSuccess method doesn't check if the transaction has block confirmations,
                                    // it only checks if the transaction was successfully sent to Metamask. It's in
                                    // handleSuccess where we wait for the transaction to be mined.
                                    onSuccess: handleSuccess,
                                    onError: (error) => console.error(error),
                                })
                            }}
                            className={enterRaffleStyles.enterRaffle}
                            disabled={isLoading || isFetching}
                        >
                            Участвовать
                        </button>

                        <a
                            className={enterRaffleStyles.getEth}
                            href="https://goerlifaucet.com/"
                            target="_blank"
                        >
                            Получить тестовые эфиры ETH
                        </a>
                    </div>
                ) : (
                    <div className={enterRaffleStyles.warningContainer}>
                        <p className={enterRaffleStyles.warningMessage}>
                            <span>
                                <img
                                    className={enterRaffleStyles.warning}
                                    src="../warning-icon.png"
                                />
                            </span>
                            Надо кошель подключить. Видишь в правом углу кнопка?
                            Select Ethereum Göerli (5) or Hardhat-Localhost
                            (31337) with <b>MetaMask</b>.
                        </p>
                    </div>
                )}
            </div>

            <div className={enterRaffleStyles.grid}>
                <RaffleStats
                    entranceFee={formattedEntranceFee}
                    numberOfPlayers={numberOfPlayers}
                    recentWinner={formattedRecentWinner}
                    raffleState={raffleState}
                />
                <RaffleDescription />
                <Logos />
            </div>
        </div>
    )
}

export default EnterRaffle
