import { connect } from "react-redux";
import CurrencyCarousel from "./currency-carousel.component";

const mapStateToProps = state => {
    return {
        source: state.widget.sourceCurrency,
        target: state.widget.targetCurrency,
        range: state.widget.currenciesRange
    };
};

export default connect(mapStateToProps)(CurrencyCarousel);
