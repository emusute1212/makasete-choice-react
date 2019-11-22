import "../model/entity/member"
import '../utils/array-util';

class MemberUsecase {
    public static choice(members: Member[], splitNum: number): GroupedMembers[] {
        const groupedMembers: GroupedMembers[] = [];
        const shuffleMembers = members.slice();
        shuffleMembers.shuffle();
        shuffleMembers.forEach((member, index) => {
            if (groupedMembers[index % splitNum] == null) {
                const groupName = (index % splitNum) + 1;
                groupedMembers[index % splitNum] = {
                    groupName: groupName.toString(),
                    members: [member]
                }
            } else {
                groupedMembers[index % splitNum].members.push(member)
            }
        });
        return groupedMembers
    }
}

export default MemberUsecase