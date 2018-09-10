import { connect } from "react-redux";
import CurrencySlide from "./currency-slide.component";
import { inputChanged } from "../../../widget.actions";

const mapStateToProps = (state, ownProps) => {
    const currentWallet = state.widget.wallet.find(wall => wall.id === ownProps.code);
    return {
        wallet: state.widget.wallet,
        exchange: currentWallet ? currentWallet.exchange : 0,
        target: currentWallet ? currentWallet.target : 0,
        walletAmount: currentWallet ? currentWallet.amount : 0
    };
};

const mapDispatchToProps = dispatch => {
    return {
        inputChanged: value => dispatch(inputChanged(value))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencySlide);
