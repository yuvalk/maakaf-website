import Image from 'next/image'
import Darkmode from '../Common/Darkmode'
import Link from 'next/link'
import SizeIndicator from './SizeIndicator'
const Header: React.FC = () => {
  return (
    <>
      <SizeIndicator />
      <nav className='fixed inset-0 z-10 flex items-center justify-between px-10 bg-lightBg dark:bg-darkBg max-h-24'>
        <Darkmode />
        <ul className='hidden md:flex md:gap-10'>
          <li className='flex items-center gap-2 cursor-pointer body-roman'>
            <span>קהילה</span>
            <div className='relative w-[10px] h-[10px]'>
              <Image
                src={'/images/polygon_white.svg'}
                alt='polygon'
                className='absolute inset-0 hidden dark:block -z-10 dark:z-10'
                width={10}
                height={10}
                style={{ width: 10, height: 10 }}
              />
              <Image
                src={'/images/polygon_dark.svg'}
                className='absolute inset-0 dark:hidden'
                alt='polygon'
                width={10}
                height={10}
                style={{ width: 10, height: 10 }}
              />
            </div>
          </li>
          <li className='cursor-pointer body-roman'>
            <Link href='/projects'>הפרויקטים</Link>
          </li>
          <li className='cursor-pointer body-roman'>
            <Link href='/about'>מי אנחנו</Link>
          </li>
        </ul>
        <Link href='/'>
          <Image
            src='/images/maakafLogo.png'
            alt='maakafLogo'
            width={40}
            height={42}
          />
        </Link>
      </nav>
    </>
  )
}

export default Header
