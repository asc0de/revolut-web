import { connect } from "react-redux";
import Widget from "./widget.component";
import { ratesReceived } from "./widget.actions";

const mapDispatchToProps = dispath => {
    return {
        ratesReceived: rates => dispath(ratesReceived(rates))
    };
};

export default connect(
    null,
    mapDispatchToProps
)(Widget);
