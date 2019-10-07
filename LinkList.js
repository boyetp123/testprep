
class Node {
    constructor(value, next = null) {
        this.value = value
        this.next = next
    }
}

class LinkList {
    constructor() {
        this.head = new Node('head')
    }
    find(value) {
        let tmpNd = this.head
        while( tmpNd.value !== value) {
            tmpNd = tmpNd.next;            
        }
        return tmpNd
    }
    insert(whereTo, value) {
        let tmpNd = this.head
        while( tmpNd.value !== whereTo) {
            tmpNd = tmpNd.next;
        }
        let tmpNd2 = tmpNd.next
        tmpNd.next = new Node(value)
        tmpNd.next.next = tmpNd2;
    }
    findPrev(value) {
        let tmpNd = this.head.next
        let prevNd = null;
        while( tmpNd.value !== value && tmpNd.next) {
            prevNd = tmpNd;
            tmpNd = tmpNd.next;
        }
        return prevNd
    }
    remove(value) {
        //find previous first
        // then assign
        let tmpNd = this.findPrev(value)
        if (tmpNd.next) {
            tmpNd.next = tmpNd.next.next;            
        } else {
            tmpNd.next = null
        }
    }
    print() {
        let tmpNd = this.head.next
        while( tmpNd ) {
            console.log(tmpNd.value)
            tmpNd = tmpNd.next;
        }
    }
}
let ll = new LinkList();
ll.insert('head',1)
ll.insert(1,2)
ll.insert(2,3)
ll.insert(2,4)
// ll.print()
ll.remove(3)
ll.print()

