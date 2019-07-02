let length = 4;
let req = [undefined, 'true', undefined, 'undefined'];
let res = [undefined, undefined, undefined, 'undefined'];

/**
 * 判断单选题的结果
 * 返回值可能为："wrong", "undone", "defect", "right"
 */
function judge() {
	let result = 'undone';
	for (let i = 0; i < length; i++) {
		if (!req[i]) {
			if (res[i]) {
				return 'wrong';
			}
		} else {
			if (result === 'undone') {
				if (res[i]) result = 'right';
			} else if ( result === 'right') {
				if (!res[i]) result = 'defect';
			}
		}
	}
	return result;
}

console.log(judge());

