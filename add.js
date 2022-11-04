const addModal = document.querySelector(".add-modal");
const openModalButton = document.querySelector(".footer-btn");
const createButton = document.querySelector(".create-button");
const phoneInput = document.getElementById("add-addressbook");

const mask = () =>
{
	
	const maskOptions = {
		mask: '+{7} (000) 000-00-00',
		lazy: false,
	};

	IMask(phoneInput, maskOptions);
}

createButton.addEventListener("click", () => {
	const nameInput = document.getElementById("add-name");
	const phoneInput = document.getElementById("add-addressbook");
	const checkbox = document.getElementById("is-favorite");

	const handledPhoneNumber = phoneInput.value.replace(/\(|\)|\s|\_|\-/g, "");
	if (/(?:\+|\d)[\d\-\(\) ]{9,}\d/g.test(handledPhoneNumber) && nameInput.value !== "" && handledPhoneNumber.length === 12) {
		insertphoneItemIntophoneContainer(nameInput.value, phoneInput.value, checkbox.checked);
		document.body.classList.remove("modal-open");
		addModal.style.display = "none";
		checkbox.checked = false;
		nameInput.value = "";
		mask()
		deleteButtons();
		favourite();
		sortphoneItems(document.querySelectorAll(".addressbook-item"));
	}
});

openModalButton.addEventListener("click", () => {
	addModal.style.display = "flex";
	document.body.classList.add("modal-open");
	mask();
})

const insertphoneItemIntophoneContainer = (name, phoneNumber, isFavorite) => {
	const phoneItem = `
	<div class="addressbook-item">
		<div class="addressbook-item-logo">
			<img src="img/logotip.png" alt="">
		</div>
		<div class="addressbook-item-data">
			<div class="addressbook-item-name">
				${name}
			</div>
			<div class="addressbook-item-addressbook">
				${phoneNumber}
			</div>
		</div>

		<div class="addressbook-item-buttons">
			<button class="addressbook-item-delete">
				<img class="button-img" src="img/krestik.png" alt="">
			</button>
			<button class="addressbook-item-favourite">
				<img class="button-love" src="${isFavorite ? "img/heart.png" : "img/empty-heart.png"}" alt="empty">
			</button>
		</div>
</div>`;

	phoneContainer.insertAdjacentHTML("beforeend", phoneItem);
}

