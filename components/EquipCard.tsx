import Image from 'next/image'
import { sprites } from '../public/img'

const EquipCard = () => {
  return (
    <article className="max-w-xs rounded-lg border-2 border-white bg-black text-white">
      <div className="flex flex-col gap-4 divide-y divide-dashed divide-zinc-500 p-4">
        {/* Stars */}
        <div className="flex flex-row items-center justify-center text-yellow-300 flex-wrap">
          {[...Array(25)].map((_, i) => (
            <span key={i}>★</span>
          ))}
        </div>

        {/* Hero */}
        <div className="flex flex-col gap-4">
          <span className="text-base font-medium">
            Superior Engraved Gollux Pendant
          </span>
          <div className="flex flex-row gap-4">
            <div className="overflow-hidden">
              <img
                src="./img/sprites/equips.png"
                alt="sprites"
                className="h-[113px] w-[113px] object-none object-left-top"
              />
              {/* <Image
                src={sprites.equips}
                alt="sprites"
                width={113}
                height={113}
                objectFit="none"
                className="object-left-top"
              /> */}
            </div>
            <div className="flex flex-col justify-between">
              <span>Type: Ring</span>
              <span>Level: 150</span>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="flex flex-col justify-between pt-4 text-xs gap-1">
          <div className="flex flex-row gap-4">
            <div className="flex w-28 flex-row items-center justify-between">
              <span className="text-left">STR:</span>
              <span className="text-right">554</span>
            </div>
            <div className="flex flex-grow flex-row gap-2">
              <span className="text-zinc-400">(</span>
              <div className="grid w-full grid-cols-3">
                <span className="text-left">500</span>
                <span className="text-left text-lime-400">50</span>
                <span className="text-left text-cyan-400">4</span>
              </div>
              <span className="text-zinc-400">)</span>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex w-28 flex-row items-center justify-between">
              <span className="text-left">DEX:</span>
              <span className="text-right">308</span>
            </div>
            <div className="flex flex-grow flex-row gap-2">
              <span className="text-zinc-400">(</span>
              <div className="grid w-full grid-cols-3">
                <span className="text-left">500</span>
                <span className="text-left text-lime-400">50</span>
                <span className="text-left text-cyan-400">4</span>
              </div>
              <span className="text-zinc-400">)</span>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex w-28 flex-row items-center justify-between">
              <span className="text-left">INT:</span>
              <span className="text-right">411</span>
            </div>
            <div className="flex flex-grow flex-row gap-2">
              <span className="text-zinc-400">(</span>
              <div className="grid w-full grid-cols-3">
                <span className="text-left">500</span>
                <span className="text-left text-lime-400">50</span>
                <span className="text-left text-cyan-400">4</span>
              </div>
              <span className="text-zinc-400">)</span>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex w-28 flex-row items-center justify-between">
              <span className="text-left">LUK:</span>
              <span className="text-right">3500</span>
            </div>
            <div className="flex flex-grow flex-row gap-2">
              <span className="text-zinc-400">(</span>
              <div className="grid w-full grid-cols-3">
                <span className="text-left">500</span>
                <span className="text-left text-lime-400">288</span>
                <span className="text-left text-cyan-400">2712</span>
              </div>
              <span className="text-zinc-400">)</span>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex w-28 flex-row items-center justify-between">
              <span className="text-left">MaxHP:</span>
              <span className="text-right">5000</span>
            </div>
            <div className="flex flex-grow flex-row gap-2">
              <span className="text-zinc-400">(</span>
              <div className="grid w-full grid-cols-3">
                <span className="text-left">1500</span>
                <span className="text-left text-lime-400"></span>
                <span className="text-left text-cyan-400">3500</span>
              </div>
              <span className="text-zinc-400">)</span>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex w-28 flex-row items-center justify-between">
              <span className="text-left">MaxMP:</span>
              <span className="text-right">5000</span>
            </div>
            <div className="flex flex-grow flex-row gap-2">
              <span className="text-zinc-400">(</span>
              <div className="grid w-full grid-cols-3">
                <span className="text-left">1500</span>
                <span className="text-left text-lime-400"></span>
                <span className="text-left text-cyan-400">3500</span>
              </div>
              <span className="text-zinc-400">)</span>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex w-28 flex-row items-center justify-between">
              <span className="text-left">Attack Power:</span>
              <span className="text-right">90</span>
            </div>
            <div className="flex flex-grow flex-row gap-2">
              <span className="text-zinc-400">(</span>
              <div className="grid w-full grid-cols-3">
                <span className="text-left">0</span>
                <span className="text-left text-lime-400">38</span>
                <span className="text-left text-cyan-400">52</span>
              </div>
              <span className="text-zinc-400">)</span>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex w-28 flex-row items-center justify-between">
              <span className="text-left">Magic Attack:</span>
              <span className="text-right">35</span>
            </div>
            <div className="flex flex-grow flex-row gap-2">
              <span className="text-zinc-400">(</span>
              <div className="grid w-full grid-cols-3">
                <span className="text-left">0</span>
                <span className="text-left text-lime-400"></span>
                <span className="text-left text-cyan-400">35</span>
              </div>
              <span className="text-zinc-400">)</span>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex w-28 flex-row items-center justify-between">
              <span className="text-left">Defense:</span>
              <span className="text-right">211</span>
            </div>
            <div className="flex flex-grow flex-row gap-2">
              <span className="text-zinc-400">(</span>
              <div className="grid w-full grid-cols-3">
                <span className="text-left">100</span>
                <span className="text-left text-lime-400"></span>
                <span className="text-left text-cyan-400">111</span>
              </div>
              <span className="text-zinc-400">)</span>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex w-28 flex-row items-center justify-between">
              <span className="text-left">All Stats:</span>
              <span className="text-right">7%</span>
            </div>
            <div className="flex flex-grow flex-row gap-2">
              <span className="text-zinc-400">(</span>
              <div className="grid w-full grid-cols-3">
                <span className="text-left">0%</span>
                <span className="text-left text-lime-400">7%</span>
                <span className="text-left text-cyan-400"></span>
              </div>
              <span className="text-zinc-400">)</span>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex w-28 flex-row items-center justify-between">
              <span className="text-left">Boss Damage:</span>
              <span className="text-right">30%</span>
            </div>
          </div>

          <div className="flex flex-row gap-4">
            <div className="flex w-28 flex-row items-center justify-between">
              <span className="text-left">Ignore Enemy DEF:</span>
              <span className="text-right">10%</span>
            </div>
          </div>
        </div>

        {/* Potential */}
        <div className="flex flex-col pt-4">
          <div className="flex flex-col justify-between gap-2">
            <span className="rounded-full text-xs font-semibold text-green-400">
              Potential
            </span>
            <div className="flex flex-col text-sm">
              <span>LUK +12%</span>
              <span>LUK +9%</span>
              <span>LUK +9%</span>
            </div>
          </div>
        </div>
        {/* <Image
          src={sprites.equips}
          alt="Equip Card"
          layout="fixed"
          loader={({ src, quality }) => `${src}?q=${quality || 100}`}
          placeholder="blur"
          priority={true}
          className="brightness-90 contrast-150 overflow-hidden absolute"
          style={{ width: '113px', height: '113px' }}
        /> */}
      </div>
    </article>
  )
}

export default EquipCard
