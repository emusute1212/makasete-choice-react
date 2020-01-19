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
            const member = {
                number: state.members.length + 1, name: action.payload
            };
            return {
                members: [...state.members, member],
                gropedMember: state.gropedMember
            };
        case DELETE_MEMBER:
            const oldMembers = state.members.slice();
            oldMembers.removeBy(action.meta.target);
            return {
                members: oldMembers,
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