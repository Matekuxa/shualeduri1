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
  ];
  document.getElementById("toggleButton").addEventListener("click",function(){
    const card=document.createElement("div");
    card.className="card";
    card.innerHTML=
    `
     <div class="card-header">
            <div class="user-info">
              <div class="avatar">
                <img src="https://fakeimg.pl/150x150" alt="${name}" />
              </div>
              <div class="user-details">
                <h3>John Doe</h3>
                <p class="user-email">${email}</p>
              </div>
            </div>
          </div>
          <div class="card-content">
            <p class="user-id">User ID: ${id}</p>
          </div>
    `
    const userlist=document.getElementById("userList");
    userlist.appendChild(card);
  })