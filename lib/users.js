let users = [];

export function addUser(user) {
  users.push(user);
}

export function findUser(email, password) {
  return users.find(u => u.email === email && u.password === password);
}

export function findUserByEmail(email) {
  return users.find(u => u.email === email);
}