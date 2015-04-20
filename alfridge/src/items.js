var itemsColumn = new Column({left: 0, right: 0, top: 100, bottom: 0, width: application.width, height: application.height, skin: lightgreySkin, style: textStyle,
	contents: [
	]
});

function updateItemsBody(allItemsDict){
	var data = {};
	for(var item in JSON.parse(allItemsDict)){
		trace(item);
		data = allItemsDict[item];
		itemsColumn.add(new Label({left: 0, right: 0, top: 0, bottom: 0, string: data.name}));
		
	}
}

var itemsMainBody = new Container({top:50, bottom:0, skin:whiteSkin, 
			contents:[
				itemsColumn
			], 	
		});