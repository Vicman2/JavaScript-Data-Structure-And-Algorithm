

class Node{
    constructor(val){
        this.val = val; 
        this.next = null
    }
}

class SinglyLinkedList {
    constructor(){
        this.head = null
        this.tail = null
        this.length = 0
    }

    push(val){
        let node = new Node(val);
        if(!this.head){
            this.head = node;
            this.tail = node
        }else{
            this.tail.next = node
            this.tail= node
        }
        this.length++
        return this
    }
    pop(){
        if(!this.head) return undefined 
        let current = this.head 
        let newTail = current

        while(current.next){
            newTail = current
            current = current.next
        }
        this.tail = newTail
        this.tail.next = null
        this.length--
        if(this.length === 0){
            this.head = null;
            this.tail = null
        }
        return current
    }

    shift(){
        if(!this.head) return undefined
        const currentHead = this.head
        this.head = currentHead.next
        this.length--
        if(this.length === 0){
            this.tail = null
        }
        return currentHead
    }
    unshift(val){
        let newHead = new Node(val)
        if(!this.head){
            this.head = newHead;
            this.tail = newHead
        }else{
            newHead.next = this.head;
            this.head = newHead
        }
        this.length++
        return this
    }
    get(index){
        if(index < 0 || index >= this.length) return null
        if(index === 0) return this.head
        if(index === this.length- 1) return this.tail
        let indexCounter = 1
        let current = this.head.next
        while(current.next){
            if(indexCounter == index){
                break
            }else{
                current = current.next
            }
            indexCounter++
        }
        return current
    }

    set(index, value){
        let node = this.get(index)
        if(!node) return false
        
        node.val = value;
        return true
    }

    insert(index, value){
        if(index < 0 || index > this.length) return false
        if(index === this.length) !!this.push(value)
        if(index === 0) !!this.unshift(value)

        const newNode = new Node(value);
        const oldIndexNode = this.get(index)
        const inFront = this.get(index-1)

        newNode.next = oldIndexNode
        inFront.next = newNode;

        this.length++

        return true
    }

    remove(index){
        if(index < 0 || index > this.length) return false
        if(index === this.length) this.pop()
        if(index === 0) this.shift()

        const oldIndexNode = this.get(index)
        const inFront = this.get(index-1)
        inFront.next = oldIndexNode.next
        return true

    }

    reverse(){
        let node = this.head
        this.head = this.tail
        this.tail = node
        var next;
        var prev = null;

        for(let i = 0 ;i< this.length; i++){
            next = node.next
            node.next = prev
            prev = node
            node = next
        }
        return this
    }

}

const singLink = new SinglyLinkedList()

singLink.push("Hello")
singLink.push("How are")
singLink.push("you doing?")
singLink.push("I Love you")

singLink.get(2)


console.log(singLink)
console.log(singLink.reverse())
