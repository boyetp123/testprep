/*

    Traversal Depth-first
        D - L - R   preorder
        L - D - R   inorder
        L - R - D   postorder
*/



function BinaryTree(){
    let that = {};
    that.root=null;

    function Node(data){
        this.right=null;
        this.left=null;
        this.data = data;
        // this.parent=null;
    }

    that.add = (data) => {
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

    that.contains = data =>{
        let current = that.root;
        while(current){
            if (data === current.data ){ 
                return true
            }
            if (data < current.data ){ // goto left
                current = current.left;
            } else { // goto right
                current = current.right;
            } 
        }
        return false;
    }

    that.getHeight = node =>{
        if (!node) return 0;

        let hLeft = that.getHeight( node.left );
        let hRight = that.getHeight(node.right);

        return 1 + Math.max( hLeft, hRight );
    }

    that.find = (data, node) =>{
        node = node || that.root;

        if (node.data === data){
            return node;
        } else if ( data > node.data){ // move to the right
            return that.find( data, node.right );
        } else { // move to the left
            return that.find( data, node.left);
        }
    }

    that.isBalanced = node =>{
        if (!node) return true;

        let lHeight = that.getHeight(node.left);
        let rHeight = that.getHeight(node.right);
        let diff = Math.abs( lHeight - rHeight);

        if ( diff > 1){
            return false;
        }
        return that.isBalanced( node.left ) && that.isBalanced( node.right );
    }

    that.printByLevel = () => {  // bread-first traversal
        let newLine = new Node('\n');
        let queue = [ that.root, newLine ];
        let str ='';

        while (queue.length){
            let node = queue.shift();
            str += node.data + (node.data !== '\n' ? ' ' :'');

            if (node === newLine && queue.length){
                queue.push(newLine);
            }

            if (node.left){
                queue.push(node.left);
            }
            if (node.right){
                queue.push(node.right);
            }
        }
        return str;
    }

    that.delete = data => {

        function deleteNode(node, data){
            if (!node) return null;

            if (data === node.data){
                if (!node.left && !node.right){ // if this is a leaf
                    return null;
                } else if (!node.left){ 
                    return node.right;
                } else if (!node.right){ 
                    return node.left;
                } else {
                    // if node has 2 children
                    let tmpNode = that.findMin( node.right );
                    node.data = tmpNode;
                    node.right = that.deleteNode( node.right );
                    return node;
                }               
            } else if ( data < node.data){
                node.left = deleteNode(node.left, data)
                return node;
            } else {
                node.right = deleteNode(node.right, data)
                return node;
            }
        }
        that.root = deleteNode(that.root, data);
    }
// prints the data first of the current node
// before go to the next level
    that.traverseBFS = callBackFn =>{
        let node = null;
        let newLine = new Node('\n');
        let queue = [that.root];
        let str ='';

        while (queue.length){
            node = queue.shift();

            if (callBackFn){
                callBackFn(node)
                // console.info( node.data )
            }

            if (node.left){
                queue.push(node.left);
            }
            if (node.right){
                queue.push(node.right);
            }
        }
        return 'done'
    }

    //  D - L - R   preorder
    that.traverseDFSPreOrder = cbFn =>{
        function traversDFS(node){
            if (cbFn){
                cbFn(node)
            }
            if (node.left){
                traversDFS(node.left)
            }
            if (node.right){
                traversDFS(node.right);
            }
        }
        traversDFS(that.root);
    }
    //  L - D - R   inorder
    that.traverseDFSInOrder = cbFn  =>{
        function traverseLDR(node){
            if (node){
                if (node.left){
                    traverseLDR(node.left)
                }
                if (cbFn){
                    cbFn(node)
                }
                if (node.right){
                    traverseLDR(node.right);
                }            
            }
        }
        traverseLDR(that.root);
    }
    //  L - R - D   postorder
    that.traverseDFSPostOrder = cbFn  =>{
        function traverseLRD(node){
            if (node){
                if (node.left){
                    traverseLRD(node.left)
                }
                if (node.right){
                    traverseLRD(node.right);
                }            
                if (cbFn){
                    cbFn(node)
                }
            }
        }
        traverseLRD(that.root);
    }
    


    return that;
}

var bt = BinaryTree()
bt.add(100);

bt.add(50);
bt.add(150);

bt.add(25);
bt.add(75);

bt.add(145);
bt.add(200);

bt.add(10);
bt.add(5);

bt.add(20);
bt.add(250);

bt.add(225);
bt.add(300);

bt.add(310);
bt.add(2);

console.info('max', bt.findMax() )
console.info('min', bt.findMin() )


// console.info('BinaryTree',JSON.stringify(bt.root))
// console.info('BinaryTree',bt.root);
// console.info('delete 2', bt.delete(2) )
// console.info('delete 5', bt.delete(5) )

let node150 = bt.find(150)
console.info('find 150', node150)
console.info('height 150', bt.getHeight( node150 ));
console.info('BinaryTree',bt.root);

console.info('printByLevel',bt.printByLevel());
console.info('--space-- for traverseBFS');

function printData(node){
    console.info(node.data);
}
console.info('traverseBFS',bt.traverseBFS( printData ) );

console.info('--space-- for traverseDFSPreOrder');
bt.traverseDFSPreOrder( printData );

console.info('--space-- for traverseDFSInOrder');
bt.traverseDFSInOrder( printData );

console.info('--space-- for traverseDFSPostOrder');
bt.traverseDFSPostOrder( printData );





