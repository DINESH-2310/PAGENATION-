// async function foo(){
//   let res=await fetch("https://www.anapioficeandfire.com/api/books")
//   res1=await res.json();
  
  
//   function one(){
// for(var i=0;i<=5;i++)
// console.log(res1[i])
  
 
//   function two(){
//     res2=res1
//     for(var i=5;i<10;i++)
//     console.log(res2[i])
        
//         }
//         two()
      
        




// function createtable(tagname,attrname,attrvalue){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attrname,attrvalue);
//     return ele;
// }
// function createtablehead(tagname,attrname,attrvalue,){
//     var ele=document.createElement(tagname);
//     ele.setAttribute(attrname,attrvalue);
//     return ele;
// }
// function createtablerow(tagname){
//     var ele=document.createElement(tagname);
//     return ele;
//     }
//     function createth(tagname,attrname,attrvalue,content){
//         var ele=document.createElement(tagname);
//         ele.setAttribute(attrname,attrvalue);
//         ele.innerHTML=content;
//         return ele;
//     }
//     function createtablebody(tagname){
//         var ele=document.createElement(tagname);
//         return ele;
//     }
//     function createdata(tagname,content){
//         var ele=document.createElement(tagname);
//         ele.innerHTML=content;
//         return ele;
//     }

//     var table=createtable("table","class","table");
//     var thead=createtablehead("thead","class","thead-dark");
//     var trow=createtablerow("tr");
//     var th=createth("th","scope","col","name and isbn ");
//     var th1=createth("th","scope","col","Number of pages");
//     var th2=createth("th","scope","col","Authors of the book");
//     var th3=createth("th","scope","col","Publisher name");
//     var th4=createth("th","scope","col","charactors of the book");

     
//     var tbody=createtablebody("tbody");
//     var tr=createtablerow("tr");
//     var td=createdata("td",res1[i].name+res1[i].isbn);
//     var td1=createdata("td",res1[i].numberOfPages
//     );
//     var td2=createdata("td",res1[i].authors
//     );
//     var td3=createdata("td",res1[i].publisher
//     );
//     var td4=createdata("td",res1[i].characters,0)
//     var button=document.createElement("div");
//     button.setAttribute("class","pagination")
//     button.innerHTML=`
//       <button class="previous" onclick="previous()">Previous</button>
//       <button class="num-button" onclick="one()">1</button>
//       <button class="num-button" onclick="two()">2</button>
//       <button class="num-button" onclick="three()">3</button>
//       <button class="next" onclick="next()">Next</button>`
   
// trow.append(th,th1,th2,th3,th4);
//  thead.append(trow);
//  table.append(thead);
// document.body.append(table);


//  tr.append(td,td1,td2,td3,td4);
//  tbody.append(tr);
//  table.append(tbody);

//  document.body.append(table);
//  document.body.append(button);
 
// }
// one()

// }


// foo()

async function main_data(range1, range2) {
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