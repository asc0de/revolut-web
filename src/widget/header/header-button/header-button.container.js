import { connect } from "react-redux";
import HeaderButton from "./header-button.component";

const mapStateToProps = state => {
    return {
        source: state.widget.sourceCurrency,
        target: state.widget.targetCurrency,
        rate: state.widget.sourceToTargetRate
    };
};

export default connect(mapStateToProps)(HeaderButton);
