const arr=[
  100,
  "iSMael",
  55,
  45,
  "sANyiA",
  66,
  "JaMEs",
  "eLAmIn",
  23,
  "IsMael",
  67,
  19,
  "ElaMIN",
];

function ordered(messyArr){
const arrFilter = messyArr.filter(data => typeof data ==="string")
    .map(data => data.toUpperCase())
    .map(data => data + "!")
return arrFilter;
}

console.log(ordered(arr));