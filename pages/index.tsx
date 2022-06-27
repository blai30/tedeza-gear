import type { NextPage } from 'next'

interface Equip {
  name: string
  image: string
}

const Home: NextPage = () => {
  const equips: Equip[] = [
    { name: 'Ring 1', image: '/img/ring0.png' },
    { name: 'Ring 2', image: '/img/ring1.png' },
    { name: 'Ring 3', image: '/img/ring2.png' },
    { name: 'Ring 4', image: '/img/ring3.png' },
    { name: 'Pendant 1', image: '/img/pendant0.png' },
    { name: 'Pendant 2', image: '/img/pendant1.png' },
    { name: 'Weapon', image: '/img/weapon.png' },
    { name: 'Belt', image: '/img/belt.png' },
    { name: 'Hat', image: '/img/hat.png' },
    { name: 'Top', image: '/img/top.png' },
    { name: 'Bottom', image: '/img/bottom.png' },
    { name: 'Shoe', image: '/img/shoe.png' },
    { name: 'Face', image: '/img/face.png' },
    { name: 'Eye', image: '/img/eye.png' },
    { name: 'Shoulder', image: '/img/shoulder.png' },
    { name: 'Glove', image: '/img/glove.png' },
    { name: 'Emblem', image: '/img/emblem.png' },
    { name: 'Earring', image: '/img/earring.png' },
    { name: 'Secondary', image: '/img/secondary.png' },
    { name: 'Cape', image: '/img/cape.png' },
  ]

  return (
    <main className="container mx-auto px-4 py-5">
      <ul className="grid grid-flow-col grid-cols-5 grid-rows-4 gap-8">
        {equips.map((equip) => (
          <li key={equip.name} className="flex flex-col items-center gap-4">
            <p className="text-xl font-medium text-black dark:text-white">
              {equip.name}
            </p>
            <img src={equip.image} alt={equip.name} />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
