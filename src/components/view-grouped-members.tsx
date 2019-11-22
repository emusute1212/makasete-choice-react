import {ListItem, ListItemText} from "@material-ui/core";
import * as React from "react";
import "../model/entity/grouped-members"

interface Props {
    groupedMembers: GroupedMembers[]
}

interface State {
}


class ViewGroupedMembers extends React.Component<Props, State> {
    public render() {
        return <div>
            {this.renderList()}
        </div>
    }

    private renderList() {
        return this.props.groupedMembers.map((member) =>
            <ListItem key={member.groupName} component="nav" divider={true}>
                <ListItemText
                    primary={member.groupName + ": " + member.members.map((it) => it.name).join(", ")}/>
            </ListItem>
        );
    }
}

export default ViewGroupedMembers