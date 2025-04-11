/**
 * პირობა იხილეთ HTML ფაილში
 */

const users = [
    {
      id: 1,
      name: "Alex Johnson",
      email: "alex@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 2,
      name: "Sarah Williams",
      email: "sarah@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 3,
      name: "Michael Brown",
      email: "michael@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 4,
      name: "Emily Davis",
      email: "emily@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 5,
      name: "David Wilson",
      email: "david@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 6,
      name: "Jessica Garcia",
      email: "jessica@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 7,
      name: "Daniel Rodriguez",
      email: "daniel@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 8,
      name: "Ashley Martinez",
      email: "ashley@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 9,
      name: "Kevin Anderson",
      email: "kevin@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
    {
      id: 10,
      name: "Brittany Thomas",
      email: "brittany@example.com",
      avatar: "https://fakeimg.pl/150x150",
    },
  ];
   users.forEach(user => { 
  const card=document.createElement("div");
  card.className="card";
  card.innerHTML=`
   <div class="card-header">
            <div class="user-info">
              <div class="avatar">
                <img src="https://fakeimg.pl/150x150" alt="John doe" />
              </div>
              <div class="user-details">
                <h3>${name}</h3>
                <p class="user-email">${email}</p>
              </div>
            </div>
          </div>
          <div class="card-content">
            <p class="user-id">User ID:${id}</p>
          </div>
  `
  const list=document.querySelector("#userList");
  list.appendChild(card);
});