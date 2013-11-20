	var gui = require('nw.gui');
	var win = gui.Window.get();
	var tray;
	var navite={
		//窗口最小化
		minimize:function(){
			win.minimize();
		},
		//监听窗口最小化事件
		listenMinimize:function(){
			win.on('minimize',function(){
				alert('窗口被最小化');
			});
		},
		//监听窗口关闭事件
		listenClose:function(){
			win.on('close',function(){
				alert('窗口被关闭');
			});
		},
		//取消窗口关闭事件的监听
		cancelClose:function(){
			win.removeAllListeners('close');
		},
		//取消窗口最小化事件的监听
		cancelMinimize:function(){
			win.removeAllListeners('minimize');
		},
		//创建新的窗口
		newWin:function(){
			gui.Window.get(window.open('http://chensy0203.github.com'));
		},
		//关闭当前窗口
		closeWin:function(){
			win.close();
		},
		//创建右键菜单
		createContextMenu:function(){
			var menu = new gui.Menu();
			menu.append(new gui.MenuItem({label:'Item A'}));
			menu.append(new gui.MenuItem({label:'Item B'}));
			menu.append(new gui.MenuItem({type:'separator'}));
			menu.append(new gui.MenuItem({label:'Item C'}));
			document.body.addEventListener('contextmenu',function(ev){
				ev.preventDefault();
				menu.popup(ev.x,ev.y);
				return false;
			});
		},
		//创建系统托盘
		createTrayMenu:function(){
			var trayMenu = new gui.Menu();
			trayMenu.append(new gui.MenuItem({label:'test1'}));
			trayMenu.append(new gui.MenuItem({label:'test2'}));
			trayMenu.append(new gui.MenuItem({label:'test3'}));
			/*win.on('minimize',function(){
				this.hide();//隐藏窗口
				tray=new gui.Tray({title:'系统托盘',icon:'app.ico'});
				tray.menu=trayMenu;
				tray.on('click',function(){
					this.remove();//删除系统托盘
					tray=null;
					win.show();//显示窗口
				});
			});*/
			tray=new gui.Tray({title:'系统托盘',icon:'app.ico'});
			tray.menu=trayMenu;
			tray.on('click',function(){
				//this.remove();//删除系统托盘
				//tray=null;
				win.show();//显示窗口
			});
		},
		copyText:function(){
			
		}
	}