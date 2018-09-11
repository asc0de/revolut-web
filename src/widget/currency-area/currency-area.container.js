import { connect } from "react-redux";
import CurrencyArea from "./currency-area.component";

const mapStateToProps = state => {
    return {
        source: state.widget.sourceCurrency,
        target: state.widget.targetCurrency
    };
};

export default connect(mapStateToProps)(CurrencyArea);
