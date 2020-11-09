///////////////////////////////////////////////////////// респонсив меню

function respobseMenu() {
	let icon = document.querySelector(".icon");
	let dropDown = document.querySelector(".dropDown");

	icon.onclick = () => {
		let x = document.querySelector("#myTopnav");
		if (x.className === "topnav") {
			dropDown.style.transform = "rotate(225deg)";
			dropDown.style.top = "27px";
			x.className += " responsive";
		} else {
			dropDown.style.transform = "rotate(45deg)";
			dropDown.style.top = "18px";
			x.className = "topnav";
		}
	}
}
respobseMenu();


///////////////////////////////////////////////////////// смена страниц

let scrin1 = document.querySelector('.scrin1');
let scrin2 = document.querySelector('.scrin2');

let freeBtn = document.querySelector('.freeBtn');
let backBtn = document.querySelector('.backBtn');
let freeStart = document.querySelector('.freeStart');

freeStart.onclick = () => {
	slide('none', 'block');
}

freeBtn.onclick = () => {
	slide('none', 'block');
}

backBtn.onclick = () => {
	slide('block', 'none');
}

function slide(a,b) {
	scrin1.style.display = a;
	scrin2.style.display = b;
}

///////////////////////////////////////////////////////// создание элементов и filter

function addNewPerson() {
	let arr = [{name: 'Alexis' , img: 'prety.jpg' , gender: 'girl'}, {name: 'Alex' , img: 'boy1.jpg' , gender: 'boy'}, {name: 'Nastya' , img: 'girl1.jpg' , gender: 'girl'}, {name: 'Sasha' , img: 'boy2.jpg' , gender: 'boy'}, {name: 'Kate' , img: 'girl2.jpg' , gender: 'girl'}, {name: 'Mickel' , img: 'boy3.jpg' , gender: 'boy'}, {name: 'Ameli' , img: 'girl3.jpg' , gender: 'girl'}, {name: 'Alen' , img: 'boy4.jpg' , gender: 'boy'}, {name: 'Chelsi' , img: 'girl4.jpg' , gender: 'girl'}, {name: 'Bad' , img: 'boy5.jpg' , gender: 'boy'}, {name: 'Heili' , img: 'girl5.jpg' , gender: 'girl'}, {name: 'Bill' , img: 'boy6.jpg' , gender: 'boy'}, {name: 'Salli' , img: 'girl6.jpg' , gender: 'girl'}, {name: 'Sandi' , img: 'girl7.jpg' , gender: 'girl'}, {name: 'Alroy' , img: 'boy7.jpg' , gender: 'boy'}, {name: 'Rozmari' , img: 'girl8.jpg' , gender: 'girl'}, {name: 'Garri' , img: 'boy8.jpg' , gender: 'boy'}, {name: 'King' , img: 'boy9.jpg' , gender: 'boy'}, {name: 'Balder' , img: 'boy10.jpg' , gender: 'boy'}, {name: 'Nastya' , img: 'girl10.jpg' , gender: 'girl'}, {name: 'Benzhamin' , img: 'boy11.jpg' , gender: 'boy'}, {name: 'Daren' , img: 'boy12.jpg' , gender: 'boy'}, {name: 'Dmitriy' , img: 'boy13.jpg' , gender: 'boy'}, {name: 'Hana' , img: 'girl12.jpg' , gender: 'girl'}, {name: 'Pandora' , img: 'girl13.jpg' , gender: 'girl'}, {name: 'Pamela' , img: 'girl14.jpg'}, {name: 'Odri' , img: 'girl15.jpg' , gender: 'girl'}, {name: 'Tee' , img: 'girl16.jpg' , gender: 'girl'}, {name: 'Sara' , img: 'girl17.jpg' , gender: 'girl'}, {name: 'MeganFox' , img: 'girl18.jpg' , gender: 'girl'}, {name: 'Tifani' , img: 'girl19.jpg' , gender: 'girl'}];
	let listPeople = document.querySelector('.listPeople');
	let filterValue = document.querySelector('.filterValue');

	if(filterValue.value == 'All'){
		listPeople.innerText = '';

		for (let i = 0; i < arr.length; i++) {
			let img = arr[i].img;
			let nameUser = arr[i].name;
			getPerson(img, nameUser);
		}
	}

	if(filterValue.value == 'Girls'){
		listPeople.innerText = '';

		arr2 = arr.filter(function(name) {
			return name.gender == 'girl';
		});
		
		for (let i = 0; i < arr2.length; i++) {
			let img = arr2[i].img;
			let nameUser = arr2[i].name;
			getPerson(img, nameUser);
		}
	}
	if(filterValue.value == 'Boys'){
		listPeople.innerText = '';
		arr3 = arr.filter(function(name) {
			return name.gender == 'boy';
		});

		for (let i = 0; i < arr3.length; i++) {
			let img = arr3[i].img;
			let nameUser = arr3[i].name;
			getPerson(img, nameUser);
		}
	}

	function getPerson(img, nameUser) {
		let person = document.createElement('div');
		let imgSmall = document.createElement('img');
		let namePerson = document.createElement('div');

		person.setAttribute('class', 'person');
		imgSmall.setAttribute('class', 'imgSmall');
		namePerson.setAttribute('class', 'namePerson');

		imgSmall.src = 'src/' + img;
		namePerson.value = nameUser;

		listPeople.append(person);
		person.append(imgSmall);
		person.append(namePerson);
	}

}
addNewPerson();