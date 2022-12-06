export const montagat = [
  {
    id: 1,
    name: "Tire type",
    price: "25",
    discription: "محم مح م سمةن ىت ىتى هة ةم مو مو ةخ نة هة هة هه",
    locat:"جرين بلازا لااسكندرية",
    shop:"shop",
    masoulDegree:'component_creator_1',
    qesm:"Tires"
  },
  {
    id: 2,
    name: " Tire type",
    price: "25",
    discription: "محم مح م سمةن ىت ىتى هة ةم مو مو ةخ نة هة هة هه",
    locat:"جرين بلازا لااسكندرية",
    shop:"shop",
    masoulDegree:'component_creator_2',
    qesm:"Tires"
  },
  {
    id: 3,
    name: "Tire type",
    price: "25",
    discription: "محم مح م سمةن ىت ىتى هة ةم مو مو ةخ نة هة هة هه",
    locat:"جرين بلازا لااسكندرية",
    shop:"shop",
    masoulDegree:'component_creator_2',
    qesm:"Tires"
  },
  {
    id: 4,
    name: "Battary type 1",
    price: "25",
    discription: "محم مح م سمةن ىت ىتى هة ةم مو مو ةخ نة هة هة هه",
    locat:"جرين بلازا لااسكندرية",
    shop:"shop",
    masoulDegree:'component_creator_3',
    qesm:"Battaries"
  },
  {
    id: 5,
    name: " Battary type 2",
    price: "25",
    discription: "محم مح م سمةن ىت ىتى هة ةم مو مو ةخ نة هة هة هه",
    locat:"جرين بلازا لااسكندرية",
    shop:"shop",
    masoulDegree:'component_creator_1',
    qesm:"Battaries"
  },
  {
    id: 6,
    name: " Battary type 3",
    price: "25",
    discription: "محم مح م سمةن ىت ىتى هة ةم مو مو ةخ نة هة هة هه",
    locat:"جرين بلازا لااسكندرية",
    shop:"shop",
    masoulDegree:'component_creator_2',
    qesm:"Battaries"
  },
  {
    id: 7,
    name: " Battary type 4",
    price: "25",
    discription: "محم مح م سمةن ىت ىتى هة ةم مو مو ةخ نة هة هة هه",
    locat:"جرين بلازا لااسكندرية",
    shop:"shop",
    masoulDegree:'component_creator_2',
    qesm:"Battaries"
  },
  {
    id: 8,
    name: " Battary type 5",
    price: "25",
    discription: "محم مح م سمةن ىت ىتى هة ةم مو مو ةخ نة هة هة هه",
    locat:"جرين بلازا لااسكندرية",
    shop:"shop",
    masoulDegree:'component_creator_1',
    qesm:"Battaries"
  },
  
];
// to get eaxact montag
export const GetExactMontag=(id)=>{
  let mont = montagat.map((montag)=>{
    return montag.id === id ? montag:null
  })
  // console.log(mont);
  return mont[id-1]
}