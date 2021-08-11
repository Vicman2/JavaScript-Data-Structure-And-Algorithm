

class Node{
    constructor(val){
        this.val = val; 
        this.next = null;
        this.prev = null
    }
}


class DoublyLinkedList{
    constructor(){
        this.head = null; 
        this.tail = null;
        this.length = null
    }

    push(val){
        let node = new Node(val)
        if(!this.head){
            this.head = node;
            this.tail = node;
        }else{
            this.tail.next = node;
            node.prev = this.tail
            this.tail =node
        }
        this.length++ 
        return this
    }

    pop(){
        if(!this.head) return undefined

        const currentTail = this.tail;
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.tail = currentTail.prev;
            this.tail.next = null
            currentTail.prev = null
        }
        this.length--
        return currentTail

    }

    shift(){
        if(this.length === 0) return undefined;

        let oldHead = this.head;
        if(this.length === 1){
            this.head = null
            this.tail = null
        }else{
            this.head = oldHead.next;
            this.head.prev = null
            oldHead.next = null;
        } 
        this.length--

        return oldHead

    }
    unshift(val){
        let node = new Node(val)

        if(this.length === 0){
            this.head = node;
            this.tail = node
        }else{
            this.head.prev = node
            node.next = this.head;
            this.head = node
        }
        this.length++
        return this
    }

    get(index){
        if(index < 0 || index >= this.length) return null
        
        let halfOfLength = Math.floor(this.length/2)
        if(halfOfLength >= index){
           let current = this.head
            for(let i = 0; i < halfOfLength; i++){
                if(i === index) break
                current = current.next
            }
            return current
        }else{
            let current = this.tail
            for(let i = this.length-1; i>=this.length - halfOfLength ; i--){
                if(i === index) break
                current = current.prev
            }
            return current
        }
    }

    set(index, value){
        let prevNode = this.get(index)
        if(prevNode){
            console.log(prevNode)
            prevNode.val = value
            return true
        }else return false
    }
    
    insert(index, value){
        if(index < 0 || index >= this.length) return false
        if(index === 0) this.unshift(value)
        if(this.index === this.length) this.push(value)
        let node = new Node(value)
        const currentPosition = this.get(index-1)
        node.prev = currentPosition
        node.next = currentPosition.next
        currentPosition.next = node
        this.length++
        return true

    }

    remove(index){
        if(index < 0 || index >= this.length) return undefined
        if(index === 0) this.shift()
        if(this.index === this.length-1) this.pop()

        
        let currentPosition = this.get(index)
        let nextNode = currentPosition.next
        let prevNode = currentPosition.prev

        nextNode.prev = prevNode
        prevNode.next = nexNode

        currentPosition.next = null
        currentPosition.prev = null

        this.length--
        return true

        

    }
}

let dll = new DoublyLinkedList()
dll.push("Vicman")
console.log(dll)
dll.push("Offordile")
console.log(dll)
dll.unshift("heyyy")
console.log(dll)
dll.push(100)
dll.push(200)
dll.push(500)
dll.push(800)
dll.get(4)
dll.set(1, "Vicmannyyyyy")
console.log(dll)