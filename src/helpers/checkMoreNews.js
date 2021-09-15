/* 

current<Number>: present page number
size<Number>: no of response need in one response
total<Number>: total no of response present in that requested api 

*/

export default function checkMoreNews(current, size, total) {
	if (current === Math.ceil(total / size)) return true
	return false
}
