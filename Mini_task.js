function Person(age, name, weight, height, speciality) {
  this.age = age;
  this.name = name;
  this.weight = weight;
  this.height = height;
  this.speciality = speciality;
}

function medianWeight(arr) {
  if(!([] instanceof Array)) {
    throw new Error("arr is not an Array");
  }
  if(!arr.every(function(x) {return (x instanceof Person);})) {
    throw new Error("Elements of array are not object of Person class.");
  }
  let m_weight = 0;
  for(let i = 0; i < arr.length; ++i) {
    m_weight += arr[i]['weight'];
  }
  return m_weight / arr.length;
}

function medianHeight(arr) {
  if(!([] instanceof Array)) {
    throw new Error("arr is not an Array");
  }
  if(!arr.every(function(x) {return (x instanceof Person);})) {
    throw new Error("Elements of array are not object of Person class.");
  }
  let m_height = 0;
  for(let i = 0; i < arr.length; ++i) {
    m_height += arr[i]['height'];
  }
  return m_height / arr.length;
}
//
Person.prototype.toString = function(){
    return this.name.toString();
};

function printLongestName(arr) {
  let max_name = '';
  let pos;
  for(let i = 0; i < arr.length; ++i) {
    if (max_name.length < arr[i].toString().length) {
      max_name = arr[i].toString();
      pos = i;
    }
  }
  return arr[pos];
}


//function sortByAge(arr, asc) {
function Combsort(arr) {
  var interval = Math.floor(arr.length/1.3);
  while (interval > 0) {
    for(var i=0; i+interval<arr.length; i+=1) {
      if (arr[i]['age'] > arr[i+interval]['age']) {
        var small = arr[i+interval]['age'];
        arr[i+interval]['age'] = arr[i]['age'];
        arr[i]['age'] = small;
      }
    }
    interval = Math.floor(interval/1.3);
  }
  return arr;
}
//}

var arr = [];
arr[0] = new Person(21, 'Arthur', 60, 170, 'waiter');
arr[1] = new Person(17, 'Edward', 45, 190, 'Vampire');
arr[2] = new Person(14, 'Kristean', 25, 165, 'actor');
arr[3] = new Person(18, 'George', 50, 180, 'policeofficer');

console.log('Longest Name has a ', printLongestName(arr));
console.log('median weight', medianWeight(arr));
console.log('median height', medianHeight(arr));
console.log('sorted age',  Combsort(arr));
