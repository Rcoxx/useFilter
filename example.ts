import { useFilter } from '../src/composables/useFilter'

const list = [
  { color: 'red', id: 1, state: false },
  { color: 'blue', id: 2, state: true },
  { color: 'yellow', id: 3, state: true },
  { color: 'green', id: 4, state: false },
  { color: 'grey', id: 5, state: true },
]

const rl = useFilter<string>(list, (item, index, array) => {
  return item.color
})
console.log(rl)
// ['red', 'blue', 'yellow', 'green', 'grey']


const r2 = useFilter<string>(list, ['state', 'id'])
console.log(r2)
// [2, 3, 5]

const r3 = useFilter<string>(list, 'color')
console.log(r3)
// ['red', 'blue', 'yellow', 'green', 'grey']

const r4 = useFilter<string | number | boolean>(list, {
  set: ['state', true],
  get: ['color', 'id', 'state'],
})
console.log(r4)
// {
//   color: ['blue', 'yellow', 'grey'],
//   id: [2, 3, 5],
//   state: [true, true, true],
// }
