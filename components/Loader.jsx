import { Loading } from "web3uikit"
import styles from "../src/styles/Loader.module.css"

const Loader = () => {
    return (
        <div className={styles.loader}>
            <Loading
                direction="bottom"
                size={46}
                spinnerColor="#2E7DAF"
                spinnerType="wave"
                text={`Ща, 5 сек... сеть загружена 🥲`}
            />
        </div>
    )
}

export default Loader
