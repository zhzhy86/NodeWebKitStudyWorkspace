App = function() {
	// Load library
	var gui = require('nw.gui');
	//var tray;
	// js��󻯣����ܻ�ԭ
	//window.resizeTo(window.screen.width, window.screen.height);
	// gui��󻯣����Ի�ԭ
	//var win = gui.Window.get();
	//win.maximize();
	return {
		init: function() {
			//App.trayShowOnWinMini();
			
			var tray = new gui.Tray({ title: 'Traysdfa', tooltip:'xx��������Ϣ������', icon: './app.ico' });
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
		/**win��С��ʱ��ʾ���̣���������win*/
		trayShowOnWinMini: function() {
			// Reference to window and tray
			var win = gui.Window.get();
			var tray;

			// Get the minimize event
			win.on('minimize', function() {
			  // Hide window
			  this.hide();
			  // Show tray
			  tray = new gui.Tray({title: '�ҵ�Ӧ������',  tooltip:'xx��������Ϣ������', icon: 'app.ico' });

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