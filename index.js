class Node {
    constructor(value, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

class LinkedList {

    static head = null;
    static tail = null;
    static size = 0;

    static append(value) {
        const node = new Node(value);
        if (this.head === null) {
            this.head = node;
            this.tail = node;
            this.size++;
        } else {
            let lastNode = this.head;
            while (lastNode.nextNode !== null) {
                lastNode = lastNode.nextNode;
            }
            lastNode.nextNode = node;
            this.size++;
        }
    }

    static at(index) {
        let step = 0;
        return loopNodesRec(this.head);
        function loopNodesRec(node) {
            if (index === step) {
                return node;
            } else {
                step++;
                return loopNodesRec(node.nextNode);
            }
        }
    }

    static contains(value) {
        let currentNode = this.head;
        while (currentNode.value !== value) {
            if (currentNode.nextNode === null) return false;
            currentNode = currentNode.nextNode;
        }
        return true;
    }

    static find(value) {
        let step = 0;
        let currentNode = this.head;
        while (currentNode.value !== value) {
            if (currentNode.nextNode === null) return null;
            currentNode = currentNode.nextNode;
            step++;
        }
        return step;
    }

    static pop() {
        let currentNode = this.head;
        while (currentNode.nextNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }
        currentNode.nextNode = null;
        this.size--;
    }

    static prepend(value) {
        const node = new Node(value, this.head);
        this.head = node;
        this.size++;
    }

    static toString() {
        if (this.head === null) return 'null';
        let string = '';
        stringifyNodeRec(this.head);
        return string;
        function stringifyNodeRec(node) {
            string = string.concat(`( ${node.value} ) -> `);
            if (node.nextNode === null) { 
                return string = string.concat(`null`); 
            }
            return stringifyNodeRec(node.nextNode);
        }
    }

}

module.exports = LinkedList;