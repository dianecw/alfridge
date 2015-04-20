/* "backend" */
var groceryLists = {
	"Trader Joe's": {updated: new Date().getTime(), items: ["Popcorn", "Hotdogs", "Cheese"]},
	"Tradedsar Joe's": {updated: new Date().getTime(), items: ["Popcorn", "Hotdogs", "Cheese"]},
	"TradASder Joe's": {updated: new Date().getTime(), items: ["Popcorn", "Hotdogs", "Cheese"]},
	"Tradsader Joe's": {updated: new Date().getTime(), items: ["Popcorn", "Hotdogs", "Cheese"]},
	"Tradder Joe's": {updated: new Date().getTime(), items: ["Popcorn", "Hotdogs", "Cheese"]},
	"Tradsader Joe's": {updated: new Date().getTime(), items: ["Popcorn", "Hotdogs", "Cheese"]},
	"Tradasder Joe's": {updated: new Date().getTime(), items: ["Popcorn", "Hotdogs", "Cheese"]},
	"TraASDder Joe's": {updated: new Date().getTime(), items: ["Popcorn", "Hotdogs", "Cheese"]},
	"Tradasder Joe's": {updated: new Date().getTime(), items: ["Popcorn", "Hotdogs", "Cheese"]},
	"Tradder Jodjske's": {updated: new Date().getTime(), items: ["Popcorn", "Hotdogs", "Cheese"]},
	"Trader Jdasoe's": {updated: new Date().getTime(), items: ["Popcorn", "Hotdogs", "Cheese"]},
	"Trader ASJoe's": {updated: new Date().getTime(), items: ["Popcorn", "Hotdogs", "Cheese"]},
};

function updateSuggestions(allItemsDict){
	var data = {};
	for(var item in JSON.parse(allItemsDict)){
	
	}
}

function updateGroceryLists(){
	groceryListsColumn.empty();
	for(listName in groceryLists){
		groceryListsColumn.add(new Container({top: 0, right: 0, left: 0, height: 60, skin: listSkin, active: true,
			contents: [
				new Label({top: 12, right: 0, left: 20, string: listName, style: textStyle }),
				new Label({top: 36, right: 0, left: 20, string: "Updated " + groceryLists[listName]["updated"], style: subtextStyle}),
			],
			behavior: {
				onTouchBegan: function(content, id, x, y, ticks){
					updateGroceryListList(listName)
					application.add(groceryListsItemsView);
				}
			}
		}));
	}
}

function updateGroceryListList(listName){
	groceryListsColumn.empty();
	for(item in groceryLists[listName]["items"]){
		groceryListsItemsColumn.add(new Label({string: groceryLists[listName]["items"][item]}));
	}
}


/* skins and styles for groceryLists */
var addButtonSkin = new Skin({fill:"#a7a9ac", borders:{top: 1, right: 1}, stroke: "#818285"});
var textStyle = new Style({font:"22px Petala Pro Thin", color:"#5A6060", horizontal: "left", indentation: 10});
var subtextStyle = new Style({font:"13px Petala Pro SemiLight", color:"#5A6060", horizontal: "left", indentation: 10});
var searchBarSkin = new Skin({fill:"#ffffff", borders:{left: 1, right: 1, top: 1, bottom: 0}, stroke:"#818285"});
var listSkin = new Skin({fill:"#f3f3f4", borders:{left: 1, right: 1, top: 1, bottom: 0}, stroke:"#818285"});

var groceryListsColumn = new Column({left: 0, right: 0, top: 50, bottom: 0, skin: whiteSkin, style: textStyle,
	contents: [
		new Label({string: "CORN"})
	]
});
updateGroceryLists();

var groceryListsItemsColumn = new Column({left: 0, right: 0, top: 50, bottom: 0, skin: whiteSkin, style: textStyle,
	contents: [
		new Label({string: "CHEESE", style: textStyle})
	]
});
//updateGroceryListList(listName)

var searchBar = new Container({left: 0, right: 60, top: 0, height: 50, skin: searchBarSkin,
	contents: [
		new Label({string: "Search", style: new Style({font:"20px Petala Pro Thin", color:"#5A6060"}),
			editable:true, active:true, left: 20,
			behavior: CONTROL.FieldLabelBehavior({
        		onDisplaying: function(container) {
					//container.focus();
				}
			})
		})
	]
});

var backButtonTemplate = BUTTONS.Button.template(function($){ return{
	height: 30, width:100, left:0, top: 5, 
	skin: tealSkin,
	contents:[
		new Label({left:10, top:2, height:30,  string:"<", style:new Style({font:"38px Petala Pro", color:"white"})})
	],
	behavior: Object.create(BUTTONS.ButtonBehavior.prototype, {
					onTap: { value:  function(content){
						application.remove($.myView)
						}}
					})
}});

var addButtonTemplate = BUTTONS.Button.template(function($){ return{
	height: 50, width:60, top: 0, right: 0,
	skin: addButtonSkin,
	contents:[
		new Label({left:18, top:0, height:50, string:"+", style:new Style({font:"38px Petala Pro", color:"white"})})
	],
	behavior: Object.create(BUTTONS.ButtonBehavior.prototype, {
					onTap: { value:  function(content){
						application.add(groceryListsAddView);
					}}
				})
}});

var suggestions = new Container();

var groceryListsListView = new Container({left: 0, right: 0, top:50, skin: whiteSkin, 
	contents: [
		searchBar,
		new addButtonTemplate(),
		suggestions,
		groceryListsColumn
	],
});

var groceryListsAddView = new Container({left: 0, right: 0, top: 50, bottom: 0, skin: whiteSkin,
	contents: [
		// STEVEN CHANGE THIS
	]
});

var groceryListsItemsView = new Container({left: 0, right: 0, top: 50, bottom: 0, skin: whiteSkin,
	contents: [
		new backButtonTemplate({myView: this}),
		groceryListsItemsColumn
	]
});