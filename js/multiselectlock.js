var MultiSelectWithLockables = Class.create(ProtoMultiSelect, {
	initialize: function($super, element, autoholder, options, func) {
		$super(element, autoholder, options, func);
		
//			this.inputElem.on('blur', (function () {
//				var el = this.inputElem;
//				
//				if ($F(el).strip().length == 0) {
//					el.setValue(this.options.get('inputMessage'));
//					el.addClassName('inputMessage');
//					this.messageCleared = false;
//				}
//			}).bindAsEventListener(this));
		
	},
	add: function ($super, item) {
		var current = this.current, retval;
		
		if (item.locked) {
			this.current = $$('.bit-box.locked').last();
			if (this.current)
				this.current = this.current.next();
		}
		
		retval = $super(item);
					
		if (item.locked) {
			retval.addClassName('locked');
			this.current = current;
		}
				
		return retval;
	},
	dispose: function ($super, el) {
		if (el.hasClassName('locked'))
			return;
		$super(el);
	},
	NO_COMMA: undefined	
});
