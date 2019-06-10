import github from './githubapi';
//grab elements

const searchTerm = document.getElementById('search-term');
console.log(searchTerm.value + "term");

github.search();