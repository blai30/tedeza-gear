import type { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import { images } from '../public/img'

interface Equip {
  name: string
  image: StaticImageData
}

const Home: NextPage = () => {
  const equips: Equip[] = [
    { name: 'Ring 1', image: images.ring0 },
    { name: 'Ring 2', image: images.ring1 },
    { name: 'Ring 3', image: images.ring2 },
    { name: 'Ring 4', image: images.ring3 },
    { name: 'Pendant 1', image: images.pendant0 },
    { name: 'Pendant 2', image: images.pendant1 },
    { name: 'Weapon', image: images.weapon },
    { name: 'Belt', image: images.belt },
    { name: 'Hat', image: images.hat },
    { name: 'Top', image: images.top },
    { name: 'Bottom', image: images.bottom },
    { name: 'Shoe', image: images.shoe },
    { name: 'Face', image: images.face },
    { name: 'Eye', image: images.eye },
    { name: 'Shoulder', image: images.shoulder },
    { name: 'Glove', image: images.glove },
    { name: 'Emblem', image: images.emblem },
    { name: 'Earring', image: images.earring },
    { name: 'Secondary', image: images.secondary },
    { name: 'Cape', image: images.cape },
  ]

  return (
    <main className="container mx-auto px-4 py-5">
      <ul className="flex flex-col flex-wrap gap-y-12 gap-x-8 lg:grid-flow-col lg:flex-row 2xl:grid 2xl:grid-cols-4 2xl:grid-rows-4">
        {equips.map((equip) => (
          <li key={equip.name} className="flex flex-col items-center gap-6">
            <p className="text-xl font-medium text-black dark:text-white">
              {equip.name}
            </p>
            <Image src={equip.image} alt={equip.name} />
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
