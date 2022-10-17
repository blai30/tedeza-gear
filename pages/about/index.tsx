import Link from 'next/link'
import EquipCard from '../../components/EquipCard'

const About = () => {
  return (
    <div>
      <Link href="/">
        <span className="text-black dark:text-white">Home</span>
      </Link>
      <EquipCard />
    </div>
  )
}

export default About
