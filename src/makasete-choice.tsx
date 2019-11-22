import {Button} from "@material-ui/core";
import * as React from "react";
import AddMember from "./components/add-member";
import SplitNumber from "./components/split-number";
import ViewGroupedMembers from "./components/view-grouped-members";
import ViewMembers from "./components/view-members";
import MemberUsecase from "./usecase/member-usecase";
import './utils/array-util';

interface Props {
}

interface State {
    members: Member[]
    splitNum: number
    groupedMembers: GroupedMembers[]
}

class MakaseteChoice extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);

        this.state = {
            members: Array(),
            splitNum: 1,
            groupedMembers: Array()
        }
    }

    public render() {
        return (
            <div>
                <div>
                    <AddMember onAddButtonClick={this.handleOnAddButtonClick}/>
                </div>
                <div>
                    <ViewMembers
                        members={this.state.members}
                        onDeleteButtonClick={this.handleOnDeleteButtonClick}/>
                </div>
                <SplitNumber maxValue={this.state.members.length}
                             currentValue={this.state.splitNum}
                             onChangeSelectValue={this.handleSplitNumChange}/>
                <div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={this.handleOnClickChoiceButton}>
                        チョイス⭐️する
                    </Button>
                </div>
                <ViewGroupedMembers groupedMembers={this.state.groupedMembers}/>
            </div>
        );
    }

    private handleOnAddButtonClick = (member: string) => {
        const members = this.state.members.slice();
        members.push({
            number: members.length + 1, name: member
        });
        this.setState({
            members
        })
    };

    private handleOnDeleteButtonClick = (member: Member) => {
        const members = this.state.members.slice();
        members.removeBy(member);
        this.setState({
            members
        })
    };

    private handleSplitNumChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        this.setState({
            splitNum: event.target.value as number
        });
    };

    private handleOnClickChoiceButton = () => {
        this.setState({
            groupedMembers: MemberUsecase.choice(this.state.members, this.state.splitNum)
        });
    };
}

export default MakaseteChoice