const { log } = console;

const form = document.getElementById('form');
const posts = document.getElementById('posts');
const message = document.getElementById('msg');
const input = document.getElementById('input');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  log('submit clicked!');

  formValidation();
});

const formValidation = () => {
  input.value === ''
    ? (message.innerHTML = 'Text area is empty! 😡')
    : acceptData();
};

let data = {};

const acceptData = () => {
  data['text'] = input.value;
  log(data);
  createPost();
};

const createPost = () => {
    posts.innerHTML += `
    <div class='task'>
        <p>${data.text}</p>
        <span class='options'>
            <i onClick='changePost(this)' class='fas fa-edit'></i>
            <i onClick='removePost(this)' class='fas fa-trash-alt'></i>
        </span>
    </div>
    `;
}

const removePost = element => {
    element.parentElement.parentElement.remove();
};

const changePost = element => {
    input.value = element.parentElement.previousElementSibling.innerHTML;
    element.parentElement.parentElement.remove();
}