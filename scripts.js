function getTriangleArea(a, h) {
	if ( (a > 0) && (h > 0) ) {
		return a * h / 2;
	} else {
		return 'Nieprawidłowe dane'
	}
}
console.log(getTriangleArea(10, 6));
var triangle1Area = getTriangleArea(8, 3),
	triangle2Area = getTriangleArea(7, 9),
	triangle3Area = getTriangleArea(12, 17);
