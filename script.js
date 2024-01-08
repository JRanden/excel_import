
var input = document.getElementById('input')
input.addEventListener('change', function() {
  readXlsxFile(input.files[0]).then(function(rows) {

    console.log(rows)

rows.forEach(element => {
    document.write (`${element[2]} ${element[3]} <br>`)
   
    var divContainer = document.createElement("div")
    divContainer.className = 'container';
    document.body.append(divContainer);
    
    img = document.createElement('img');
    img.src = element[7];
    img.style.width = "100px"
    divContainer.appendChild(img);

});
    console.log(rows[1][7])
    var divContainer = document.createElement("div")
    divContainer.className = 'container';
    document.body.append(divContainer);
    
    img = document.createElement('img');
    img.src = rows[1][7];
    img.style.width = "100px"
    divContainer.appendChild(img);  

rows.forEach(element => {
    if (element[4] == 15){
        document.write (`15 år :${element[2]} ${element[3]}`)
        
        var divContainer = document.createElement("div")
        divContainer.className = 'container';
        document.body.append(divContainer);
        
        img = document.createElement('img');
        img.src = element[7];
        img.style.width = "100px"
        divContainer.appendChild(img);
    }
     if (element[8] == "Asker"){
        document.write (`Fra Asker: ${element[2]} ${element[3]}`)
        var divContainer = document.createElement("div")
        divContainer.className = 'container';
        document.body.append(divContainer);
        
        img = document.createElement('img');
        img.src = element[7];
        img.style.width = "100px"
        divContainer.appendChild(img);
    }
  });
  var arr = []
  rows.forEach(element => {
    arr.push(element[4])
    console.log(arr)
  });
  arr.sort(function(a, b){return b-a});

let highest = arr[1];
rows.forEach(element => {
    if (element[4] == highest) {
        document.write (`Den med høyest alder: Navn: ${element[2]} ${element[3]} Alder: ${element[4]}`)
    }
});
  })

})
