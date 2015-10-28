
Function.prototype.sequence = function(prevFunc) {
	var nextFunc = this;
	return function() {
		return prevFunc.call(this, nextFunc.apply(this, arguments));
	}
}

module.exports = {

}
