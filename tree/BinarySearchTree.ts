import { Node } from "./Node";
export class BinarySearchTree {
    root: any = null;

    insertNode(node: Node, key: any) {
        if (key < node.key) {
            if (node.left === null) {
                const leftNode = new Node(key);
                node.left = leftNode;
            } else {
                this.insertNode(node.left, key);
            }
        } else {
            if (node.right === null) {
                const rightNode = new Node(key);
                node.right = rightNode;
            } else {
                this.insertNode(node.right, key);
            }
        }
    }

    insert(key: any) {
        if (!this.root) {
            this.root = new Node(key);
        } else {
            this.insertNode(this.root, key);
        }
    }
    inOrderTraverse(callback: Function) {
        return this.inOrderTraverseNode(this.root, callback);
    }

    inOrderTraverseNode(node: Node, callBack: Function) {
        if (!!node) {
            this.inOrderTraverseNode(node.left, callBack);
            callBack(node.key);
            this.inOrderTraverseNode(node.right, callBack);
        }
    }
    preOrderTraverse(callback: Function) {
        return this.preOrderTraverseNode(this.root, callback);
    }
    preOrderTraverseNode(node: Node, callBack: Function) {
        if (!!node) {
            callBack(node.key);
            this.preOrderTraverseNode(node.left, callBack);
            this.preOrderTraverseNode(node.right, callBack);
        }
    }
    postOrderTraverse(callback: Function) {
        return this.postOrderTraverseNode(this.root, callback);
    }
    postOrderTraverseNode(node: Node, callBack: Function) {
        if (!!node) {
            this.preOrderTraverseNode(node.left, callBack);
            this.preOrderTraverseNode(node.right, callBack);
            callBack(node.key);
        }
    }

    minNode(node: Node) {
        let current = node;
        while (!!current && !!current.left) {
            current = current.left;
        }
        return current;
    }
    min() {
        return this.minNode(this.root);
    }
    maxNode(node: Node) {
        let current = node;
        while (!!current && !!current.right) {
            current = current.right;
        }
        return current;
    }
    right() {
        return this.maxNode(this.root);
    }

    search(key: any) {
        return this.searchNode(this.root, key);
    }
    searchNode(node: Node, key: any): any {
        if (!node) return undefined;
        if (node.key === key) {
            return node;
        }
        if (node.key > key) {
            return this.searchNode(node.left, key);
        } else {
            return this.searchNode(node.right, key);
        }
    }
    removeNode(node:Node,key:any){
        if(!node){
            return node;
        }
        if(node.key<key){
            node.right = this.removeNode(node.right,key);
            return node;
        }else if (node.key>key){
            node.left = this.removeNode(node.right,key);
            return node;
        }else{
            if(!node.right&&!node.left){
                node == null;
                return null;
            }else if(!node.left){
                node = node.right;
                return node;
            }else if(!node.right){
                node =node.left;
                return node;
            }else{
                const temp = this.minNode(node.right);
                node.key = temp.key;
                node.right = this.removeNode(node.right,node.key)
                return node;
            }
        }
    }
}