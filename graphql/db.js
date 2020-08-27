export const people = [
  {
    id : 1,
    name: "Nicolas",
    age: 18,
    gender: "female"
  },
  {
    id : 2,
    name: "Youn",
    age: 30,
    gender: "male"
  },
  {
    id : 3,
    name: "Sarah",
    age: 34,
    gender: "female"
  }
]

export const getByID = id => {
  const filteredPeople = people.find(person => id === person.id);
  return filteredPeople;
}