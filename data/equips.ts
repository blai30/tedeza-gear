import { Equip, SkillRing } from '../models'
import * as images from '../public/img'

export const skillRings: SkillRing[] = [
  {
    name: 'Ring of Restraint',
    level: 4,
    image: images.skillring1,
    color: 'bg-rose-700',
  },
  {
    name: 'Continuous Ring',
    level: 4,
    image: images.skillring2,
    color: 'bg-rose-700',
  },
  {
    name: 'Weapon Jump L Ring',
    level: 4,
    image: images.skillring3,
    color: 'bg-yellow-700',
  }
]

export const equips: Equip[] = [
  {
    name: 'Ring 4',
    stars: [22, 17, 17],
    potential: [30, 0, 20],
    image: images.ring4,
    alt: [images.ring4_meso, images.ring4_drop],
  },
  {
    name: 'Ring 3',
    stars: [22, 22, 17],
    potential: [30, 20, 40],
    image: images.ring3,
    alt: [images.ring3_meso, images.ring3_drop],
  },
  {
    name: 'Ring 2',
    stars: [22, 0, 0],
    potential: [30, 20, 20],
    image: images.ring2,
    alt: [images.ring2_meso, images.ring2_drop],
  },
  {
    name: 'Ring 1',
    stars: [12, 0, 0],
    potential: [33, 20, 20],
    image: images.ring1,
    alt: [images.ring1_meso, images.ring1_drop],
  },
  {
    name: 'Pocket',
    stars: [null, null, null],
    potential: [null, null, null],
    image: images.pocket,
    alt: [null, null],
  },

  {
    name: 'Pendant 2',
    stars: [22, 22, 22],
    potential: [33, 20, 20],
    image: images.pendant2,
    alt: [images.pendant2_meso, images.pendant2_drop],
  },
  {
    name: 'Pendant 1',
    stars: [22, 5, 5],
    potential: [33, 0, 20],
    image: images.pendant1,
    alt: [images.pendant1_meso, images.pendant1_drop],
  },
  {
    name: 'Weapon',
    stars: [22, null, null],
    potential: [33, null, null],
    image: images.weapon,
    alt: [null, null],
  },
  {
    name: 'Belt',
    stars: [22, null, null],
    potential: [30, null, null],
    image: images.belt,
    alt: [null, null],
  },
  {
    name: 'Medal',
    stars: [null, null, null],
    potential: [null, null, null],
    image: images.medal,
    alt: [null, null],
  },

  {
    name: 'Hat',
    stars: [22, null, null],
    potential: [6, null, null],
    image: images.hat,
    alt: [null, null],
  },
  {
    name: 'Face',
    stars: [22, 22, 22],
    potential: [27, 20, 20],
    image: images.face,
    alt: [images.face_meso, images.face_drop],
  },
  {
    name: 'Eye',
    stars: [22, 17, 17],
    potential: [30, 0, 40],
    image: images.eye,
    alt: [images.eye_meso, images.eye_drop],
  },
  {
    name: 'Top',
    stars: [22, null, null],
    potential: [27, null, null],
    image: images.top,
    alt: [null, null],
  },
  {
    name: 'Bottom',
    stars: [22, null, null],
    potential: [30, null, null],
    image: images.bottom,
    alt: [null, null],
  },

  {
    name: 'Earring',
    stars: [22, 17, 17],
    potential: [30, 0, 40],
    image: images.earring,
    alt: [images.earring_meso, images.earring_drop],
  },
  {
    name: 'Shoulder',
    stars: [22, null, null],
    potential: [33, null, null],
    image: images.shoulder,
    alt: [null, null],
  },
  {
    name: 'Glove',
    stars: [22, null, 17],
    potential: [10, null, 9],
    image: images.glove,
    alt: [null, images.glove_drop],
  },
  {
    name: 'Cape',
    stars: [22, null, null],
    potential: [33, null, null],
    image: images.cape,
    alt: [null, null],
  },
  {
    name: 'Shoe',
    stars: [22, null, null],
    potential: [33, null, null],
    image: images.shoe,
    alt: [null, null],
  },

  {
    name: 'Emblem',
    stars: [null, null, null],
    potential: [33, null, null],
    image: images.emblem,
    alt: [null, null],
  },
  {
    name: 'Badge',
    stars: [null, null, null],
    potential: [null, null, null],
    image: images.badge,
    alt: [null, null],
  },
  {
    name: 'Secondary',
    stars: [22, null, null],
    potential: [33, null, null],
    image: images.secondary,
    alt: [null, null],
  },
  {
    name: 'Heart',
    stars: [8, null, null],
    potential: [30, null, null],
    image: images.heart,
    alt: [null, null],
  },
]
