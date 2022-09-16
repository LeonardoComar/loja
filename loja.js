const produtos_selecionados = [];
const produtos = [
  {
    id: 100,
    nome: 'trento',
    img: 'img_product.png',
    quantidade: 0,
    valor_unidade: 2.50
  },

  {
    id: 200,
    nome: 'bala',
    img: 'img_product.png',
    quantidade: 0,
    valor_unidade: 0.15
  }
]

inicializarLoja = () => {
  var containerProdutos = document.getElementById('produtos');
  produtos.map((val)=>{
    containerProdutos.innerHTML+= `
      <div class="produto-single">
        <img src="`+val.img+`" />
        <p>`+val.nome+`</p>
        <a class="link" key="`+val.id+`" href="#">Adicionar</a>
      </div>
    `;
  })
}

inicializarLoja();

function atualizarValorTotal(){
  let valorTotal = 0.0;

  produtos_selecionados.map((produto)=>{
    valorTotal += (produto.quantidade * produto.valor_unidade)
  })

  return valorTotal;
}

atualizarCarrinho = () => {
  var containerCarrinho = document.getElementById('carrinho');
  containerCarrinho.innerHTML = "";
  produtos_selecionados.map((val)=>{
    if(val !== undefined){ 
      containerCarrinho.innerHTML+= `
        <p>`+val.nome+` | Quantidade: `+val.quantidade+`</p>
        <p>Valor Total: R$`+atualizarValorTotal()+`</p>
      `;
    }
  })
}

var links = document.getElementsByClassName('link');

for(var i=0; i < links.length; i++){
  links[i].addEventListener("click", function(){
    let key = this.getAttribute("key");

    produtos.map((produto)=>{
      if (produto.id == key){
        produto.quantidade++;
        if (!produtos_selecionados.includes(produto)){
          produtos_selecionados.push(produto); 
        }   
      }
    })

    console.log(produtos_selecionados);
    atualizarCarrinho();
  })
}