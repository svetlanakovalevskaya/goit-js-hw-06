import users from "./users.js";

const getSortedUniqueSkills = users => users.flatMap(user => user.skills)
.filter((user, index, array) => array.indexOf(user) === index)
.sort((prevSkill, nextSkill) => prevSkill.localeCompare(nextSkill));
  
  console.log(getSortedUniqueSkills(users));
  /* [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 
  'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 
  'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ] */