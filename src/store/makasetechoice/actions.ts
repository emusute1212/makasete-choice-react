import {ADD_MEMBER, CHOICE_MEMBER, DELETE_MEMBER, MakaseteChoiceActionTypes, Member} from "./types";

export function addMember(newMember: string): MakaseteChoiceActionTypes {
    return {
        type: ADD_MEMBER,
        payload: newMember
    }
}

export function deleteMember(targetNumber: Member): MakaseteChoiceActionTypes {
    return {
        type: DELETE_MEMBER,
        meta: {
            target: targetNumber
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