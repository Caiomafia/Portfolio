
const modal = document.querySelector('.modal-container')
const tbody = document.querySelector('tbody')
const sNome = document.querySelector('#m-nome')
const sFuncao = document.querySelector('#m-funcao')
const sGeometria = document.querySelector('#m-geometria')
const sC = document.querySelector('#m-c')
const sId = document.querySelector('#m-id')




let itens
let id


function insertItem(item, index) {
    let tr = document.createElement('tr')

    tr.innerHTML = `
    <ol id='list'>
    <li class="animals">${item.nome}
    <td>${item.funcao}</td>
    <td>${item.sG}</td>
    <td> ${item.sC}</td>
    <td> ${item.sId}</td>  
    </li>
    </ol>
    
    `


  tbody.appendChild(tr)
}

btnSalvar.onclick = e => {
  
  if (sNome.value == '' || sFuncao.value == '' || sGeometria.value == ''|| sC.value == ''|| sId.value == '') {
    return
  }

  e.preventDefault();

  if (id !== undefined) {
    itens[id].nome = sNome.value
    itens[id].funcao = sFuncao.value
    itens[id].geometria = sGeometria.value
    itens[id].sC = sC.value
    itens[id].sC = sId.value


  } else {
    itens.push({'nome': sNome.value, 'funcao': sFuncao.value, 'sG': sGeometria.value, 'sC': sC.value ,  'sId': sId.value})
  }

  setItensBD()

  modal.classList.remove('active')
  loadItens()
  id = undefined
}

function loadItens() {
  itens = getItensBD()
  tbody.innerHTML = ''
  itens.forEach((item, index) => {
    insertItem(item, index)
  })

}

const getItensBD = () => JSON.parse(localStorage.getItem('dbfunc')) ?? []
const setItensBD = () => localStorage.setItem('dbfunc', JSON.stringify(itens))

loadItens()

/*Teste de uma lista de*/ 
// JavaScript code
function search_animal() {
  let input = document.getElementById('searchbar').value
  input=input.toLowerCase();
  let x = document.getElementsByClassName('animals');
    
  for (i = 0; i < x.length; i++) { 
      if (!x[i].innerHTML.toLowerCase().includes(input)) {
          x[i].style.display="none";
      }
      else {
          x[i].style.display="list-item";                 
      }
  }
}
