function instanctOf(left, right) {
  const prototype = right.prototype;
  let left = left.__proto__;

  while (true) {
    if (proto === null || proto === undefined) return false;
    if (proto === prototype) return true;

    left = left.__proto__
  }
}
