const { atom } = require("recoil");

const datakaryawan = atom({
   key: 'datakaryawan',
   default: [
      { id: 1, name: "Rafli Ramadhan", role: 'Owner', email: 'rafli@repsicode.com', title: "Fullstack Web Developer", departement: "Software", active: true },
      { id: 2, name: "Shafa Diva Syahira", role: 'Member', email: 'shafa@repsicode.com', title: "Management", departement: "Software", active: true },
      { id: 3, name: "Fadil Maulana Akbar", role: 'Admin', email: 'fadil@repsicode.com', title: "Backend Developer", departement: "Software", active: true }
   ]
})

export default datakaryawan