import type { NextPage } from 'next'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import { Octokit } from 'octokit'
import { RadioGroup } from '@headlessui/react'
import { equips, skillRings } from '../data'

const presetOptions: { name: string; index: number }[] = [
  { name: 'Default', index: 0 },
  { name: 'Mesos Obtained', index: 1 },
  { name: 'Item Drop Rate', index: 2 },
]

const classNames = (...classes: string[]) => {
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
      {/* <Link href="about">
        <span className="text-black dark:text-white">About</span>
      </Link> */}
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
                  'flex select-none items-center justify-center border px-6 py-3 text-sm font-medium uppercase transition first:rounded-t-md first:border-b-0 last:rounded-b-md last:border-t-0 sm:flex-1 sm:first:rounded-l-md sm:first:rounded-r-none sm:first:border-b sm:first:border-r-0 sm:last:rounded-l-none sm:last:rounded-r-md sm:last:border-l-0 sm:last:border-t'
                )
              }
            >
              <RadioGroup.Label as="span">{option.name}</RadioGroup.Label>
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

      <div className="mt-6 flex flex-col flex-wrap justify-center gap-6 align-top md:grid-flow-col md:flex-row">
        {skillRings.map((ring) => (
          <div
            key={ring.name}
            className="flex w-72 flex-row items-center gap-4 rounded-lg bg-zinc-700 p-4"
          >
            <Image
              src={ring.image}
              alt={ring.name}
              loader={({ src, quality }) => `${src}?q=${quality || 100}`}
              placeholder="blur"
              priority={true}
              className="rounded-lg"
            />
            <div className="flex flex-col items-start gap-2">
              <h2 className="text-center text-black dark:text-white">
                {ring.name}
              </h2>
              <h2 className="text-center text-black dark:text-white">
                Level {ring.level}
              </h2>
            </div>
          </div>
        ))}
      </div>

      <ul className="flex flex-col flex-wrap justify-center gap-2 align-top md:grid-flow-col md:flex-row 2xl:grid 2xl:grid-cols-4 2xl:grid-rows-5">
        {equips.map((equip) => (
          <li
            key={equip.name}
            className={classNames(
              preset.index === 1 && equip.alt && equip.alt[0]
                ? 'bg-yellow-400/40 dark:bg-yellow-600/30'
                : preset.index === 2 && equip.alt && equip.alt[1]
                ? 'bg-green-400/40 dark:bg-green-600/30'
                : '',
              'flex flex-col gap-5 rounded-xl px-5 py-4 transition-colors'
            )}
          >
            <div className="flex flex-col gap-2">
              <p className="text-center text-xl font-medium text-black dark:text-white">
                {equip.name}
              </p>
              <div className="flex flex-row items-center justify-center gap-4">
                <p className="flex-1 text-right font-bold text-yellow-700 subpixel-antialiased dark:text-yellow-300">
                  {equip.stars[preset.index] !== null
                    ? equip.stars[preset.index] + ' ★'
                    : equip.stars[0] !== null
                    ? equip.stars[0] + ' ★'
                    : '—'}
                </p>
                <p className="flex-1 text-left font-bold text-lime-700 subpixel-antialiased dark:text-lime-300">
                  {equip.potential[preset.index] !== null
                    ? equip.potential[preset.index] + ' %'
                    : '—'}
                </p>
              </div>
            </div>
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
                loader={({ src, quality }) => `${src}?q=${quality || 100}`}
                placeholder="blur"
                priority={true}
                className="rounded-lg"
              />
            )}
          </li>
        ))}
      </ul>
    </main>
  )
}

export default Home
