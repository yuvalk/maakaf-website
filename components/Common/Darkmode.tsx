'use client'
import Image from 'next/image'
import { useTheme } from 'next-themes'

const Darkmode: React.FC = () => {
  const { setTheme } = useTheme()

  return (
    <div className='relative w-6 h-6'>
      <Image
        src={'/images/nightMode.svg'}
        alt='switchDarkMode'
        className='cursor-pointer absolute inset-0 dark:hidden hover:dark-icon-hover item-hover-transition'
        width={24}
        height={24}
        onClick={() => {
          setTheme('dark')
        }}
      />
      <Image
        src={'/images/lightMode.svg'}
        alt='switchDarkMode'
        className='cursor-pointer absolute hidden dark:block -z-10 dark:z-10 inset-0 hover:light-icon-hover item-hover-transition'
        width={24}
        height={24}
        onClick={() => {
          setTheme('light')
        }}
      />
    </div>
  )
}

export default Darkmode
