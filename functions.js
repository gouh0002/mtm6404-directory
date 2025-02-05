//2
function list(clients) {
  const listItems = clients.map(
    (client) =>
      `<li class="list-group-item d-flex justify-content-between" data-index="${client.index}">
            ${client.name}
            <strong>$ ${client.balance}</strong>
            </li>`
  );
  return listItems.join("");
}
//3
function order(clients, property) {
  return clients.sort((a, b) => {
    if (a[property] < b[property]) {
      return -1;
    } else if (a[property] > b[property]) {
      return 1;
    } else {
      return 0;
    }
  });
}

//4
function total(clients) {
  return clients.reduce((total, client) => total + client.balance, 0);
}

//5
function info(index) {
  return clients.find((client) => client.index === index);
}

//6

function search(query) {
  return clients.filter((client) =>
    client.name.toLowerCase().includes(query.toLowerCase())
  );
}
