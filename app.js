
// This is for the dark mode------------------------------
const toggleSwitch = document.querySelector('input[type="checkbox"]');

if(localStorage.getItem('darkModeEnabled')) {
  document.body.className = 'dark';
  toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('click', () => {
  //this is a destructured variable. Its basically like writing 
  //toggleSwitch.checked
  const {checked} = toggleSwitch;
  if(checked){
    //if its checked then we are going to add it to the localStorage
    localStorage.setItem('darkModeEnabled', true)
  } else {
    //If its unchecked we will remove it from the local storage in 
    //order to not load it when our page refreshes
    localStorage.removeItem('darkModeEnabled')
  }
  /*This is saying "is the toggleSwitch checked? If yes then set 
  the document.body.className to 'dark'. If its not checked then
  don't add anything". */
  document.body.className = checked ? 'dark' : ''
})
//--------------------------------------------------------