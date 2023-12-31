import express from 'express';
import { v4 as uuidv4 } from 'uuid';
uuidv4();
const router = express.Router();
let users = [];
router.get('/', (req, res) => {
  console.log(users);
  res.send(users);
});

router.post('/', (req, res) => {
  const user = req.body;
  // import { v4 as uuidv4 } from 'uuid';
  // const userID = uuidv4();
  // const userWithId =
  users.push({ ...user, id: uuidv4() });
  res.send(`User with the name ${user.name} added to the database`);
});

router.get('/:id', (req, res) => {
  const { id } = req.params
  const foundUser = users.find((user)=>user.id == id)
  res.send(foundUser)
})

router.delete('/:id', (req, res) => {
  const { id } = req.params
  users = users.filter((user) => user.id != id);
  res.send(`User with the id ${id} deleted from the database`)
})

// Put is used to overwrite something , patch is used to modify something 
router.patch('/:id', (req, res) => {
  const { id } = req.params
  const{name,lastName,age}=req.body
  const user = users.find((user) => user.id == id);
  if (name) {
    user.firstName = firstName
  }
  if (lastName) {
    user.lastName = lastName
  }
  if (age) {
    user.age = age
  }
    res.send(`User with the ${id} has been updated`)
  }
)
export default router;
