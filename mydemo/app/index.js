App = function() {
	// Load library
	var gui = require('nw.gui');
	//var tray;
	// js最大化，不能还原
	//window.resizeTo(window.screen.width, window.screen.height);
	// gui最大化，可以还原
	//var win = gui.Window.get();
	//win.maximize();
	return {
		init: function() {
			//App.trayShowOnWinMini();
			
			var tray = new gui.Tray({ title: 'Traysdfa', tooltip:'xx您有新消息。。。', icon: './app.ico' });
			tray.on('click', function() {
				gui.Window.get().show();
				//this.remove();
				//tray = null;
			});
			/**/
			/*$(window).resize(function() {
				App.iframeResize();
			});*/

			//App.iframeResize();
		},
		iframeResize: function() {
			$('#myif').height($(window).height()-30);
		},
		/**win最小化时显示托盘；并且隐藏win*/
		trayShowOnWinMini: function() {
			// Reference to window and tray
			var win = gui.Window.get();
			var tray;

			// Get the minimize event
			win.on('minimize', function() {
			  // Hide window
			  this.hide();
			  // Show tray
			  tray = new gui.Tray({title: '我的应用托盘',  tooltip:'xx您有新消息。。。', icon: 'app.ico' });

			  // Show window and remove tray when clicked
			  tray.on('click', function() {
				win.show();
				this.remove();
				tray = null;
			  });
			});
		}



	};
}();
$(App.init);