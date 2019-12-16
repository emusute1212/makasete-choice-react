import MemberUsecase from "../../usecase/member-usecase";
import {
    ADD_MEMBER,
    CHOICE_MEMBER,
    DELETE_MEMBER,
    MakaseteChoiceActionTypes,
    MakaseteChoiceState
} from "./types";

const initialState: MakaseteChoiceState = {
    members: [],
    gropedMember: []
};

export function makaseteChoiceReducer(
    state = initialState,
    action: MakaseteChoiceActionTypes
): MakaseteChoiceState {
    switch (action.type) {
        case ADD_MEMBER:
            return {
                members: [...state.members, action.payload],
                gropedMember: state.gropedMember
            };
        case DELETE_MEMBER:
            return {
                members: state.members.filter(
                    member => member.number !== action.meta.number
                ),
                gropedMember: state.gropedMember
            };
        case CHOICE_MEMBER:
            return {
                members: state.members,
                gropedMember: MemberUsecase.choice(state.members, action.meta.splitNumber)
            };
        default:
            return state
    }
}