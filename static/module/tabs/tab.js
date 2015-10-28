var $ = require("jquery");

class Tabs{
	constructor(element, options) {
		this.$element = $(element);
		this.options = options;
	}
	_init(){
		this.index = 0;
		this.interval = null;
		this._autoRun();
		this._click();
	}
	_autoRun(){
		if(this.options.autoRun){
			this.interval = setInterval(() =>{
				this.index ++;
				var len = this.$element.find(".J_tabs li").length;
				if(this.index >= len){
					this.index = 0;
				}
				console.log(this)
				this._run();
			},1000);
			this._clearInterVal();
		}
	}
	_run(){
		var $navLi = this.$element.find(".J_tabs li");
		var $box = this.$element.find(".J_tabs_box");
		$navLi.removeClass(this.options.classNameVal).eq(this.index).addClass(this.options.classNameVal);
		$box.addClass("disno").eq(this.index).removeClass('disno');
	}
	_click(){
		var that = this;
		this.$element.find(".J_tabs li").on('click', function(){
			var $this = $(this);
			that.index = $this.index();
			that._run();
		})
	}	
	_clearInterVal(){
		this.$element.find(".J_tabs").on('mouseover', () => {
			clearInterval(this.interval);
		})
		this.$element.find(".J_tabs").on('mouseout', () => {
			this._autoRun();
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
    		data.init();
      	}
  	})
}
$.fn.tabs.options = {
	autoRun: false
}

module.exports = Tabs;




