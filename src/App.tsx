import {Button} from "@material-ui/core";
import * as React from "react";
import {connect} from "react-redux";
import AddMember from "./components/add-member";
import SplitNumber from "./components/split-number";
import ViewGroupedMembers from "./components/view-grouped-members";
import ViewMembers from "./components/view-members";

import {AppState} from "./store";
import {addMember, choiceMember, deleteMember} from "./store/makasetechoice/actions";

import {MakaseteChoiceState} from "./store/makasetechoice/types";

interface AppProps {
    addMember: typeof addMember,
    deleteMember: typeof deleteMember,
    choiceMember: typeof choiceMember,
    makaseteChoice: MakaseteChoiceState;
}

interface State {
    splitNum: number
}

class App extends React.Component<AppProps, State> {
    constructor(props: AppProps) {
        super(props);

        this.state = {
            splitNum: props.makaseteChoice.members.length
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
                        members={this.props.makaseteChoice.members}
                        onDeleteButtonClick={this.handleOnDeleteButtonClick}/>
                </div>
                <SplitNumber maxValue={this.props.makaseteChoice.members.length}
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
                <ViewGroupedMembers groupedMembers={this.props.makaseteChoice.gropedMember}/>
            </div>
        );
    }

    private handleOnAddButtonClick = (inputValue: string) => {
        this.props.addMember(inputValue)
    };

    private handleOnDeleteButtonClick = (member: Member) => {
        this.props.deleteMember(member)
    };

    private handleSplitNumChange = (event: React.ChangeEvent<{ value: unknown }>) => {
        this.setState({
            splitNum: event.target.value as number
        });
    };

    private handleOnClickChoiceButton = () => {
        this.props.choiceMember(this.state.splitNum)
    };
}

const mapStateToProps = (state: AppState) => ({
    makaseteChoice: state.makaseteChoice
});

export default connect(
    mapStateToProps,
    {addMember, deleteMember, choiceMember}
)(App);
