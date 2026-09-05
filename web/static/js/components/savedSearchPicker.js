import { renderList } from "../views/savedSearches.js";
import { closeDialog, openDialog, wireDismiss } from "./modal.js";

let dialog, listContainer;

function init() {
	if (dialog) return;
	dialog = document.getElementById("saved-search-picker");
	listContainer = document.getElementById("saved-search-picker-list");
	wireDismiss(dialog);
}

export function openPicker(onSelect) {
	init();
	renderList(listContainer, (search) => {
		onSelect(search);
		closeDialog(dialog);
	});
	openDialog(dialog);
}
