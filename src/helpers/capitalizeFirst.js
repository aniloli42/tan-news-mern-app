/* 

text<String>: Must be string

*/

export default function capitalizeFirst(text) {
	if (typeof text !== String) return 'Invaild String'
	return text?.charAt(0).toUpperCase() + text?.slice(1)
}
