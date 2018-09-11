import { combineReducers } from "redux";
import WidgetReducer from "./widget/widget.reducer";

export default combineReducers({
    widget: WidgetReducer
});
