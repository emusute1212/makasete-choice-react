import {ListItem, ListItemText} from "@material-ui/core";
import * as React from "react";
import DeleteButton from "./delete-button";

interface Props {
    members: Member[],
    onDeleteButtonClick: (member: Member) => void
}

interface State {
}


class ViewMembers extends React.Component<Props, State> {
    public render() {
        return <div>
            {this.renderList()}
        </div>
    }

    private renderList() {
        return this.props.members.map((member) =>
            <ListItem key={member.number} component="nav" divider={true}>
                <ListItemText primary={member.name}/>
                <DeleteButton member={member} onDeleteButtonClick={this.props.onDeleteButtonClick}/>
            </ListItem>
        );
    }
}

export default ViewMembers