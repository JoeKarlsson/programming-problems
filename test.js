// reads through our list and removes desired node in the Linked List
async remove(index) {
    const currNode = await this.get(index);
    const prevNode = await this.get(index - 1);

    // If index not in LL, return false
    if (currNode === false) {
        return false;
    }

    // If removing the head, reassign the head to the next node
    if (index === 0) {
        await this.setHead(currNode.next);

        // If removing the tail, reassign the tail to the prevNode
    } else if (currNode.next === null) {
        await this.setTail(prevNode._id);
        await this.col.updateOne(
        { _id: prevNode._id },
        { $set: { next: currNode.next } }
        );

        // Happy Path
    } else {
        await this.col.updateOne(
        { _id: prevNode._id },
        { $set: { next: currNode.next } }
        );
    }
    await this.col.deleteOne({
        _id: currNode._id,
    });

    return true;
}