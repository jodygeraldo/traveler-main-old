// import { json, useOutletContext } from 'remix'

// import { ItemTypes } from '~/types/item'

// export default function InventoryRoute() {
//   const items = useOutletContext<ItemTypes>()

//   return (
//     <div>
//       <h1>Character Route</h1>
//       {items.ascensionLocalSpecialty.map(item => (
//         <div key={item.name} className="flex gap-4 items-center">
//           <h1 className="text-3xl">{item.name}</h1>
//           <h2 className="text-2xl">{item.count}</h2>
//           <h2>{item.region}</h2>
//         </div>
//       ))}
//     </div>
//   )
// }
