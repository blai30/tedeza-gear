import type { NextPage } from 'next'
import Image, { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { Octokit } from 'octokit'
import { images } from '../public/img'
import { RadioGroup } from '@headlessui/react'

interface Equip {
  name: string
  image: StaticImageData
  alt?: [StaticImageData | null, StaticImageData | null]
}

// prettier-ignore
const equips: Equip[] = [
  { name: 'Ring 1', image: images.ring0, alt: [null, images.ring0_1] },
  { name: 'Ring 2', image: images.ring1, alt: [images.ring1_0, null] },
  { name: 'Ring 3', image: images.ring2, alt: [images.ring2, null] },
  { name: 'Ring 4', image: images.ring3, alt: [images.ring3_0, images.ring3_1] },
  { name: 'Pocket', image: images.pocket },

  { name: 'Pendant 1', image: images.pendant0, alt: [null, images.pendant0_1] },
  { name: 'Pendant 2', image: images.pendant1, alt: [null, images.pendant1_1] },
  { name: 'Weapon', image: images.weapon },
  { name: 'Belt', image: images.belt },
  { name: 'Medal', image: images.medal },

  { name: 'Hat', image: images.hat },
  { name: 'Face', image: images.face, alt: [images.face_0, images.face_1] },
  { name: 'Eye', image: images.eye, alt: [null, images.eye_1] },
  { name: 'Top', image: images.top },
  { name: 'Bottom', image: images.bottom },

  { name: 'Earring', image: images.earring, alt: [images.earring, null] },
  { name: 'Shoulder', image: images.shoulder },
  { name: 'Glove', image: images.glove },
  { name: 'Cape', image: images.cape },
  { name: 'Shoe', image: images.shoe },

  { name: 'Emblem', image: images.emblem },
  { name: 'Badge', image: images.badge },
  { name: 'Secondary', image: images.secondary },
  { name: 'Heart', image: images.heart },
]

const presetOptions: { name: string; index: number }[] = [
  { name: 'Default', index: 0 },
  { name: 'Mesos Obtained', index: 1 },
  { name: 'Item Drop Rate', index: 2 },
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const Home: NextPage = () => {
  const [updatedDate, setupdatedDate] = useState<Date>()
  const [preset, setPreset] = useState(presetOptions[0])

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
    <main className="container mx-auto flex flex-col items-center gap-8 py-12">
      <div className="space-y-2">
        <h3 className="text-center text-2xl font-bold text-neutral-600 dark:text-neutral-300">
          Updated {updatedDate ? formatDistanceToNow(updatedDate) : '...'} ago
        </h3>
        <h3 className="text-center text-neutral-600 dark:text-neutral-300">
          {updatedDate ? format(updatedDate, 'yyyy-MM-dd HH:mm a') : '...'}
        </h3>
      </div>

      <RadioGroup value={preset} onChange={setPreset} className="">
        <RadioGroup.Label className="sr-only">
          Choose equipment preset option
        </RadioGroup.Label>
        <div className="grid grid-cols-1 sm:grid-cols-3">
          {presetOptions.map((option) => (
            <RadioGroup.Option
              key={option.name}
              value={option}
              className={({ checked }) =>
                classNames(
                  checked
                    ? 'bg-neutral-700 text-white dark:bg-neutral-300 dark:text-black'
                    : 'border-gray-200 bg-white text-gray-900 hover:bg-neutral-300 dark:border-neutral-700 dark:bg-neutral-800 dark:text-gray-100 dark:hover:bg-neutral-700',
                  'flex select-none items-center justify-center border py-3 px-6 text-sm font-medium uppercase transition first:rounded-t-md first:border-b-0 last:rounded-b-md last:border-t-0 sm:flex-1 sm:first:rounded-l-md sm:first:rounded-r-none sm:first:border-r-0 sm:first:border-b sm:last:rounded-r-md sm:last:rounded-l-none sm:last:border-l-0 sm:last:border-t'
                )
              }
            >
              <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

      <ul className="2xl: flex flex-col flex-wrap justify-center gap-2 align-top md:grid-flow-col md:flex-row 2xl:grid 2xl:grid-cols-4 2xl:grid-rows-5">
        {equips.map((equip) => (
          <li
            key={equip.name}
            className={classNames(
              preset.index === 1 && equip.alt && equip.alt[0]
                ? 'bg-yellow-400/40 dark:bg-yellow-600/30'
                : preset.index === 2 && equip.alt && equip.alt[1]
                ? 'bg-green-400/40 dark:bg-green-600/30'
                : '',
              'flex flex-col gap-6 rounded-xl px-5 py-4 transition-colors'
            )}
          >
            <p className="text-center text-xl font-medium text-black dark:text-white">
              {equip.name}
            </p>
            {equip.image && (
              <Image
                src={
                  preset.index === 0
                    ? equip.image
                    : preset.index === 1 && equip.alt && equip.alt[0]
                    ? equip.alt[0]
                    : preset.index === 2 && equip.alt && equip.alt[1]
                    ? equip.alt[1]
                    : equip.image
                }
                alt={equip.name}
                layout="fixed"
                loader={({ src, quality }) => `${src}?q=${quality || 100}`}
                placeholder="blur"
                priority={true}
              />
            )}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
