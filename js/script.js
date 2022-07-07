"use strict";

function maxRot(n) {
	let max = n
	let arr = String(n).split('')
	for (let i = 0; i < arr.length; i++) {
		arr.push(arr.splice(i, 1))
		const num = Number(arr.join(''))
		if (num > max) max = num
	}
	return max
}