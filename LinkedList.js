function SSL() {
	let head = null;

	function Node(element) {
		this.element = element;
		this.next = null;
	}

	this.insert = function(element) {
		let node = new Node(element);
		if (!head) {
			head = node;
			return this;
		}
		let current_node = head;
		while (current_node.next) {
			current_node = current_node.next;
		}
		current_node.next = node;
		return this;
	}

	this.removeAt = function(pos) {
		if (pos < 0) {
			throw new Error('Invalid position.');
		}
		let current_node = head;
		let previous_node = null;
		if (pos === 0) {
			head = current_node.next;
			current_node.next = null;
			current_node = null; // deleting node
			return this;
		}
		let count = 0;
		while(count < pos) {
			++count;
			if (!current_node.next) {
				throw new Error('Invalid max range for position.');
			}
			previous_node = current_node;
			current_node = current_node.next;
		}
		previous_node.next = current_node.next;
		current_node.next = null;
		current_node = null;
		return this;
	};

}


let obj = new SSL();
obj.insert(85);
obj.insert(66);
obj.insert(7);
