
const leaders = [
  { name: 'na**eh', wager: '$520,425', prize: '$2,800' },
  { name: 'Pn**yy', wager: '$278,108', prize: '$1,700' },
  { name: 'la*0s', wager: '$196,928', prize: '$1,100' },
  { name: 'kr**pl', wager: '$145,700', prize: '$850'  },
  { name: 'sx**12', wager: '$123,219', prize: '$720'  },
  { name: 'tt**kk', wager: '$96,002',  prize: '$530'  },
];

const tbody = document.getElementById('lb-body');
leaders.forEach((row, i) => {
  const tr = document.createElement('tr');
  tr.innerHTML = `<td>${i+1}</td><td>${row.name}</td><td>${row.wager}</td><td>${row.prize}</td>`;
  tbody.appendChild(tr);
});

document.getElementById('year').textContent = new Date().getFullYear();
