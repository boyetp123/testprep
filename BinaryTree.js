
function BinaryTree(){
    let that = {};
    that.root=null;

    function Node(data){
        this.right=null;
        this.left=null;
        this.data = data;
        // this.parent=null;
    }

    that.add = (data)=>{
        let node = new Node(data);
        if (!that.root){
            that.root = node;
        } else {
            let currNode = that.root;
            while (currNode){
                if (node.data < currNode.data){
                    if (!currNode.left){
                        currNode.left = node;
                        break;
                    }
                    currNode = currNode.left;
                } else if(node.data > currNode.data){
                    if (!currNode.right){
                        currNode.right = node;
                        break
                    }
                    currNode = currNode.right ;
                } else {
                    break;
                }
            }
        }
    }

    that.findMin = node =>{
        node = node || that.root;
        
        while(node.left){
            node = node.left;
        }
        return node.data;
    }

    that.findMax = node =>{
        node = node || that.root;
        
        while(node.right){
            node = node.right;
        }
        return node.data;
    }


    that.delete = data => {

        function deleteNode(node, data){
            if (!node) return null;

            if (data === node.data){
                if (!node.left && !node.right){ // if this is a leaf
                    return null;
                }
                if (!node.left){ 
                    return node.right;
                }
                if (!node.right){ 
                    return node.left;
                }                
                // if node has 2 children
                let tmpNode = that.findMin( node.right );
                node.data = tmpNode;
                node.right = that.deleteNode( node.right );
                return node;
            } else if ( data < node.data){
                node.left = deleteNode(node.left, data)
                return node;
            } else {
                node.right = deleteNode(node.right, data)
                return node;
            }
        }
        this.root = deleteNode(this.root, data);
    }

    return that;
}

var binTree = BinaryTree()
binTree.add(100);

binTree.add(200);
binTree.add(91);

binTree.add(110);
binTree.add(85);

binTree.add(115);
binTree.add(80);

binTree.add(120);
binTree.add(75);

binTree.add(210);
binTree.add(95);




console.info('BinaryTree',JSON.stringify(binTree))