let Stack = function()
{
  this.count = 0;
  this.storage = {};
};

Stack.prototype.push = function(value)
{
  let result = this.storage[this.count] = value;
  this.count++;
  return result;
};
Stack.prototype.pop = function()
{
  if(this.count === 0)
  return undefined;
  this.count--;
  let result = this.storage[this.count];
  delete this.storage[this.count];
  return result;
};

Stack.prototype.size = function()
{
  return this.count;
};

let p = new Stack();
p.push(5);
