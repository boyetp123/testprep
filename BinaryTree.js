
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