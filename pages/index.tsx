import type { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import { format, formatDistanceToNow } from 'date-fns'
import { images } from '../public/img'
import { Octokit } from 'octokit'
import { useEffect, useState } from 'react'

interface Equip {
  name: string
  image: StaticImageData
}

const Home: NextPage = () => {
  const [updatedDate, setupdatedDate] = useState<Date>()

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

  useEffect(() => {
    const fetchCommit = async () => {
      const octokit = new Octokit()
      const latestCommit = await octokit.rest.repos.getCommit({
        owner: 'blai30',
        repo: 'tedeza-gear',
        ref: 'main',
      })

      if (latestCommit.data.commit.committer?.date) {
        setupdatedDate(new Date(latestCommit.data.commit.committer.date))
      }
    }

    fetchCommit()
  }, [])

  return (
    <main className="container mx-auto py-5">
      <div className="p-6 space-y-2">
        <h3 className="text-center text-2xl font-bold text-neutral-600 dark:text-neutral-300">
          Updated {updatedDate ? formatDistanceToNow(updatedDate) : "..."} ago
        </h3>
        <h3 className="text-center text-neutral-600 dark:text-neutral-300">
          {updatedDate ? format(updatedDate, 'yyyy-MM-dd HH:mm a') : "..."}
        </h3>
      </div>
      <ul className="flex flex-col flex-wrap justify-center gap-1 align-top md:grid-flow-col md:flex-row 2xl:grid 2xl:grid-cols-4 2xl:grid-rows-4">
        {equips.map((equip) => (
          <li
            key={equip.name}
            className="flex flex-col gap-6 rounded-xl px-6 py-4 hover:bg-white hover:shadow-lg hover:dark:bg-neutral-800 hover:dark:shadow-neutral-800/50"
          >
            <p className="text-center text-xl font-medium text-black dark:text-white">
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
