export interface GroupedMembers {
    groupName: string
    members: Member[]
}

export interface Member {
    number: number
    name: string
}

export interface MakaseteChoiceState {
    members: Member[]
    gropedMember: GroupedMembers[]
}

// Actions
export const ADD_MEMBER = 'ADD_MEMBER';
export const DELETE_MEMBER = 'DELETE_MEMBER';
export const CHOICE_MEMBER = 'CHOICE_MEMBER';

interface AddMemberAction {
    type: typeof ADD_MEMBER
    payload: string
}

interface DeleteMemberAction {
    type: typeof DELETE_MEMBER
    meta: {
        target: Member
    }
}

interface ChoiceMemberAction {
    type: typeof CHOICE_MEMBER
    meta: {
        splitNumber: number
    }
}

export type MakaseteChoiceActionTypes = AddMemberAction | DeleteMemberAction | ChoiceMemberAction