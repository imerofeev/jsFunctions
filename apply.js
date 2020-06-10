const apply = (num, func, argument) => {
  if (num === 0) return argument;
  if (num < 0) throw new RangeError("Negative number");
  if (typeof num !== "number") throw new TypeError("Not number");
  if (typeof func !== "function") throw new TypeError("Not function");
  if (argument === undefined) throw new TypeError("Invalid argument");
  return apply(num - 1, func, func(argument));
};

export default apply;
