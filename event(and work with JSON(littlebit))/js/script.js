
	var data = {
		"accounts" : [
			{
				"title"  : "Try delete (press ArrowLeft)",
				"img"  : "src/rotating.png"
			},
			{
				"title"  : "Change color (press ArrowRight)",
				"img"  : "src/rotating.png"
			},
			{
				"title"  : "Change color (press ArrowUp)",
				"img"  : "src/rotating.png"
			},
			{
				"title"  : "Change color (press ArrowDown)",
				"img"  : "src/rotating.png"
			},
		]
	}

	var screen1 = document.querySelector(".screen1");
	var screen2 = document.querySelector(".screen2");
	var cancelBtn = document.querySelector("#cancelBtn");

	var json = JSON.stringify(data.accounts);
	var obj = JSON.parse(json);
	var accounts = document.querySelector(".accounts");
	var goScreen2 = document.querySelector(".goScreen2");

	var addBtn = document.querySelector("#addBtn");
	var input_Text = document.querySelector("#input_Text");
	var json;

	function varData() {
		for(var i = 0; i < obj.length; i++) {
			var parent = document.createElement('div');
			var title = document.createElement('div');
			var pict = document.createElement('img');

			parent.setAttribute("tabindex", "0");
			parent.setAttribute("nomer", `${[i]}`);
			parent.setAttribute("onkeydown", "clickBtn(event)");

			title.innerText = obj[i].title;
			pict.src = obj[i].img;

			accounts.append(parent);
			parent.append(pict);
			parent.append(title);
		}
	}
	varData();

	function scActive() {
		screen2.style.display = "none";
		input_Text.value = "";
		screen1.style.display = "flex";
	}

	goScreen2.onclick = function() {
		screen1.style.display = "none";
		screen2.style.display = "flex";
	}

	addBtn.onclick = function() {
		obj.push({title: input_Text.value, img: "src/rotating.png"});

		json = JSON.stringify(obj);
		accounts.innerText = "";

		obj = JSON.parse(json);
		varData();
		
		scActive();
	}

	cancelBtn.onclick = function() {
		scActive();
	}

	function clickBtn(event) {
		var tryFrst = event.path[0];
		var rem = tryFrst.attributes.nomer.value;
		var removed;
		
		if(event.code == "ArrowLeft") {
			tryFrst.remove();
			if(accounts.innerText == "") {
				obj.splice(0, 1);
			}else {
				removed = obj.splice(rem, 1);
			}
		}
		if(event.code == "ArrowRight") {
			tryFrst.style.backgroundColor = "rgba(104, 110, 217, 0.5)";
		}
		if(event.code == "ArrowUp") {
			tryFrst.style.backgroundColor = "rgba(104, 196, 217, 0.5)";
		}
		if(event.code == "ArrowDown") {
			tryFrst.style.backgroundColor = "rgba(217, 104, 104, 0.5)";
		}
	}