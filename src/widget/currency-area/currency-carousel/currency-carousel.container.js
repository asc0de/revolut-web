import { connect } from "react-redux";
import { sourceChanged, targetChanged } from "../../widget.actions";
import CurrencyCarousel from "./currency-carousel.component";

const mapStateToProps = state => {
    return {
        source: state.widget.sourceCurrency,
        target: state.widget.targetCurrency,
        range: state.widget.currenciesRange
    };
};

const mapDispatchToProps = dispatch => {
    return {
        sourceChanged: code => dispatch(sourceChanged(code)),
        targetChanged: code => dispatch(targetChanged(code))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CurrencyCarousel);
