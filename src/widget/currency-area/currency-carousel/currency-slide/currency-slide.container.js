import { connect } from "react-redux";
import CurrencySlide from "./currency-slide.component";

const mapStateToProps = state => {
    return {
        wallet: state.widget.wallet
    };
};

export default connect(mapStateToProps)(CurrencySlide);
