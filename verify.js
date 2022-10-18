const bcrypt = require('bcrypt');
const myPlaintextPassword = 's0/\/\P4$$w0rD';
const hash = '$2b$11$Jii0enl4DYV8m/3K4hifZOJOHvEvbQAjg6B9bxqoKvFFOxwSk.ZvK';
const hash2 = '$2b$11$Jii0enl4DYs8m/3K4hifZOJOHvEvbQAjg6B9bxqoKvFFOxwSk.ZvK';

const verify = async function() {
  const result = await bcrypt.compare(myPlaintextPassword, hash);
  console.log(result);
}


const verify2 = async function() {
  const result = await bcrypt.compare(myPlaintextPassword, hash2);
  console.log(result);
}



const hash3 = '$2a$10$w3kC6Y47qoqpzoEP1/B.Q.LfW8m.26mocZAdr.SVFGsygYZnU6Qay';
const verify3 = async function() {
  const result = await bcrypt.compare('123456', hash3);
  console.log(result);
}

console.log(bcrypt.compareSync('123456', hash3));

verify3();