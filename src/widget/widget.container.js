import { connect } from "react-redux";
import Widget from "./widget.component";
import { ratesReceived } from "./widget.actions";

const mapStateToProps = state => {
    return {
        currencyInfo: {
            sourceCurrency: state.widget.sourceCurrency,
            targetCurrency: state.widget.targetCurrency
        }
    };
};

const mapDispatchToProps = dispath => {
    return {
        ratesReceived: rates => dispath(ratesReceived(rates))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Widget);
