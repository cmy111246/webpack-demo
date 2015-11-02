var $ = require("jquery");

class Tabs{
	constructor(element, options) {
		this.$element = $(element);
		this.options = options;
		this.tabObj = this.$element.find(this.options.tabObj);
		this.tabBox = this.$element.find(this.options.tabBox);
	}
	_init(){
		this.index = 0;
		this.interval = null;
		this._autoRun();
		this._click();
	}
	_autoRun(){
		if(this.options.autoRun){
			this._setInterval()
			this._clearInterVal();
		}
	}
	_setInterval(){
		this.interval = setInterval(() =>{
			this.index ++;
			var len = this.tabBox.length;
			if(this.index >= len){
				this.index = 0;
			}
			this._run();
		},this.options.speed);
	}
	_run(){
		var $navLi = this.tabObj.children();
		var $box = this.tabBox;
		$navLi.removeClass(this.options.curClassName).eq(this.index).addClass(this.options.curClassName);
		$box.addClass("disno").eq(this.index).removeClass('disno');
	}
	_click(){
		var that = this;
		this.tabObj.children().on('click', function(){
			var $this = $(this);
			that.index = $this.index();
			that._run();
		})
	}	
	_clearInterVal(){
		this.tabObj.on('mouseover', () => {
			if(this.interval){
				clearInterval(this.interval);
				this.interval = null;
			}
		})
		this.tabObj.on('mouseout', () => {
			this._setInterval();
		})
	}
}

$.fn.tabs = function(option) {
	return this.each(function() {
        var $this = $(this),
          	data = $this.data('dh.tabs'),
          	options = $.extend({}, $.fn.tabs.options, typeof option == 'object' && option);
      	if (!data) {
      		var data = new Tabs(this, options);
    		$this.data('dh.tabs', data);
    		data._init();
      	}
  	})
}
$.fn.tabs.options = {
	autoRun: false,
	speed: 2000,
	tabObj: ".J_tabs",
	curClassName: "cur",
	tabBox: ".J_tabs_box"
}

module.exports = Tabs;




