import { Equip } from '../models'
import * as images from '../public/img'

export const equips: Equip[] = [
  {
    name: 'Ring 4',
    stars: [17, null, 12],
    potential: [24, null, 20],
    image: images.ring4,
    alt: [null, images.ring4_drop],
  },
  {
    name: 'Ring 3',
    stars: [null, 0, 12],
    potential: [12, 20, 20],
    image: images.ring3,
    alt: [images.ring3_meso, images.ring3_drop],
  },
  {
    name: 'Ring 2',
    stars: [18, 0, 12],
    potential: [18, 20, 20],
    image: images.ring2,
    alt: [images.ring2_meso, images.ring2_drop],
  },
  {
    name: 'Ring 1',
    stars: [null, 0, 10],
    potential: [27, 20, 20],
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
    stars: [17, null, 13],
    potential: [23, null, 20],
    image: images.pendant2,
    alt: [null, images.pendant2_drop],
  },
  {
    name: 'Pendant 1',
    stars: [17, null, 5],
    potential: [18, null, 20],
    image: images.pendant1,
    alt: [null, images.pendant1_drop],
  },
  {
    name: 'Weapon',
    stars: [17, null, null],
    potential: [10, null, null],
    image: images.weapon,
    alt: [null, null],
  },
  {
    name: 'Belt',
    stars: [17, null, null],
    potential: [18, null, null],
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
    stars: [17, null, null],
    potential: [6, null, null],
    image: images.hat,
    alt: [null, null],
  },
  {
    name: 'Face',
    stars: [17, 16, 10],
    potential: [23, 20, 20],
    image: images.face,
    alt: [images.face_meso, images.face_drop],
  },
  {
    name: 'Eye',
    stars: [17, null, 12],
    potential: [30, null, 20],
    image: images.eye,
    alt: [null, images.eye_drop],
  },
  {
    name: 'Top',
    stars: [17, null, null],
    potential: [18, null, null],
    image: images.top,
    alt: [null, null],
  },
  {
    name: 'Bottom',
    stars: [17, null, null],
    potential: [21, null, null],
    image: images.bottom,
    alt: [null, null],
  },

  {
    name: 'Earring',
    stars: [18, 16, 12],
    potential: [18, 20, 20],
    image: images.earring,
    alt: [images.earring_meso, images.earring_drop],
  },
  {
    name: 'Shoulder',
    stars: [17, null, null],
    potential: [33, null, null],
    image: images.shoulder,
    alt: [null, null],
  },
  {
    name: 'Glove',
    stars: [17, null, null],
    potential: [7, null, null],
    image: images.glove,
    alt: [null, null],
  },
  {
    name: 'Cape',
    stars: [17, null, null],
    potential: [20, null, null],
    image: images.cape,
    alt: [null, null],
  },
  {
    name: 'Shoe',
    stars: [17, null, null],
    potential: [20, null, null],
    image: images.shoe,
    alt: [null, null],
  },

  {
    name: 'Emblem',
    stars: [null, null, null],
    potential: [21, null, null],
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
    stars: [18, null, null],
    potential: [20, null, null],
    image: images.secondary,
    alt: [null, null],
  },
  {
    name: 'Heart',
    stars: [8, null, null],
    potential: [18, null, null],
    image: images.heart,
    alt: [null, null],
  },
]
