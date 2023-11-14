class ListNode {
    data: any;
    next: ListNode | null;

    constructor(data: any) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null;

    constructor() {
        this.head = null;
    }

    append(data: any) {
        const newNode = new ListNode(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    display() {
        let current = this.head;
        while (current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// Example usage:
const myList = new LinkedList();
myList.append(1);
myList.append(2);
myList.append(3);

myList.display(); // Output: 1 2 3
