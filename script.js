
async function main_data(range1, range2) {
  try{
    const data = await fetch("https://www.anapioficeandfire.com/api/books")
    const array_main = await data.json();
      document.body.innerHTML = ``;
      table_head();
    
      for (i=0; i<array_main.length; i++) {
        if ( i>=range1 && i<=range2 ) {
          user_details(array_main[i]);
        }
      }
    document.body.append(buttons);
  }
  catch (error) {
    console.log(error.message);
  }
  }
  // ---------------------------------------------------------------------
  
  function table_head() {
    const table_head = document.createElement("table") // table tag created
    table_head.setAttribute("class", "table_head");
    
    table_head.innerHTML = `
    <tr>
      <th class="head">name and isbn</th>
      <th class="head">Number of pages</th>
      <th class="head">Authors of the book</th>
      <th class="head">Publisher name</th>
      <th class="head">charactors of the book</th>
    </tr>
    `
    document.body.append(table_head); // table apppe
    
   }
  
  function user_details(array) {
    
    const table = document.createElement("tbody")
    table.setAttribute("class", "table");
   
    table.innerHTML = `
    <tr>
      <td class="details">${array.name+array.isbn}</td>
      <td class="details">${array.numberOfPages}</td>
      <td class="details">${array.authors}</td>
      <td class="details">${array.publisher}</td>
      <td class="details">${array.characters[0,1,2,3,4,5]}</td>
    </tr>
    `
    const container = document.querySelector("table");
   
    container.append(table);
    
   
  }
  
  
  // -------------------------------------------------------------------------
  
  let n;
  
  function one() {
    main_data(0,3);
    n=1
  }
  function two() {
    main_data(4,6 );
    n=2
  }
  function three() {
    main_data(6, 10);
    n=3
  }
  
  let num = {
    1:one,
    2:two,
    3:three,
  
  }
  
  function previous() {
    if (n !== 0) {
      num[n-1]()
    }
  }
  
  function next() {
    if (n !== 3) {
      num[n+1]()
    }
  }
  
  
  // --------------------------------------------------------------------
  
  let buttons = document.createElement("div");
  buttons.setAttribute("class", "pagination")
  buttons.innerHTML = ` <br>
  <button class="previous" onclick="previous()">Previous</button>
  <button class="num_button" onclick="one()">1</button>
  <button class="num_button" onclick="two()">2</button>
  <button class="num_button" onclick="three()">3</button>
  <button class=" next" onclick="next()">Next</button>
  `
  
  document.onload(one());

