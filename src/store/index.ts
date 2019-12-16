import {combineReducers} from "redux";
import {makaseteChoiceReducer} from "./makasetechoice/reducers";

const rootReducer = combineReducers({
    makaseteChoice: makaseteChoiceReducer
});

export type AppState = ReturnType<typeof rootReducer>