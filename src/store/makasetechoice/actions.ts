import {ADD_MEMBER, CHOICE_MEMBER, DELETE_MEMBER, MakaseteChoiceActionTypes, Member} from "./types";

export function addMember(newMember: Member): MakaseteChoiceActionTypes {
    return {
        type: ADD_MEMBER,
        payload: newMember
    }
}

export function deleteMember(targetNumber: number): MakaseteChoiceActionTypes {
    return {
        type: DELETE_MEMBER,
        meta: {
            number: targetNumber
        }
    }
}

export function choiceMember(splitNumber: number): MakaseteChoiceActionTypes {
    return {
        type: CHOICE_MEMBER,
        meta: {
            splitNumber
        }
    }
}