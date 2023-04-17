const addForm = document.querySelector('#addForm');
const list = document.querySelector('#list');

const handleAddItem = (content) => {
	const li = document.createElement('li');
	const span = document.createElement('span');
	const delBtn = document.createElement('button');
	span.innerText = content;
	delBtn.innerText = '삭제';
	delBtn.addEventListener('click', handleDeleteItem);
	li.append(span, delBtn);
	list.append(li);
}
const handleDeleteItem = ({target}) => {
	const {parentNode} = target;
	list.removeChild(parentNode);
}
const handleSubmit = (e) => {
	e.preventDefault();
	const [input] = e.target;
	if(input.value !== '') {
		handleAddItem(input.value);
		input.value = '';
	}
}

addForm.addEventListener('submit', handleSubmit);