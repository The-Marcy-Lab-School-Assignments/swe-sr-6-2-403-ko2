function inorderTraversal(node) {
	if (!node) return;
	inorderTraversal(node.left);
	console.log(node.value);
	inorderTraversal(node.right);
}

// Example Usage
const tree = {
	value: 'A',
	left: {
		value: 'B',
		left: { value: 'D', left: null, right: null },
		right: { value: 'E', left: null, right: null },
	},
	right: {
		value: 'C',
		left: null,
		right: { value: 'F', left: null, right: null },
	},
};

inorderTraversal(tree); // Output: D B E A C F
