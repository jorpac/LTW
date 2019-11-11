window.addEventListener('load', function() {

let products = document.getElementById('products');
console.log(products);
 
let form_a = document.getElementsByTagName('form');
console.log(form_a);
let description = document.querySelector("label + label");
console.log(description);

let form_c = document.querySelectorAll("form");
for (let index = 0; index < form_c[0].length; index++) {
    const element = form_c[0][index];
    console.log(element);
    
}

let form = document.getElementsByTagName('form')[0];
form.addEventListener('submit', check_form);

function check_form(event){
        event.preventDefault();
        var n = document.createElement("tr");
        var element = document.createTextNode(event['path'][0][0].value);
        var el = document.createElement("td");
        el.append(element);
        n.append(el);
         
        element = document.createElement("input");
        element.setAttribute("value", event['path'][0][1].value);
        el = document.createElement("td");
        el.append(element);
        n.append(el);

        element = document.createElement("input");
        element.setAttribute("type", "button");
        element.setAttribute("value", "Remove");
        el = document.createElement("td");
        el.append(element);
        n.append(el);
        
        products.innerHTML += n.innerHTML;
        console.log(n);
        alert('Submitted!');
        
        
    let remove = document.querySelector('tr td+td+td');
    console.log(remove);
    if(remove !=null){
        remove.addEventListener('click', remove_product);
    }
    function remove_product(event){
        alert("AAA"   );
        products.innerHTML -= n.innerHTML;

          console.log(event.outerHTML);
      }    
}

    let remove = document.querySelector('tr  td+td+td');
    console.log(remove);
    if(remove !=null){
        remove.addEventListener('button', remove_product);
    }
    



});

 