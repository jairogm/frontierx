import Head from 'next/head'
import Navbar from '../components/navbar/Navbar'
import Hero from '../components/hero/Hero'
import Accordion from '../components/accordion/Accordion'
import Image from 'next/image'
import { SiDiscord } from 'react-icons/si'
import { FiTwitter, FiInstagram, FiExternalLink } from 'react-icons/fi'
import {RiQuestionLine} from 'react-icons/ri'
import Link from 'next/link'
import Card from '../components/card/Card'
export default function Home() {
  return (
    <div className='w-screen box-border bg-gradient-to-bl from-frontier-bg-100 via-frontier-bg-200 to-frontier-bg-300'>
      <Head>
        <title>FRONTIER X</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />


      </Head>

      <main className='w-full'>
        <div className='bg-black'>
          <Navbar />
        </div>
        <div className='bg-gradient-to-r from-frontier-x-100 to-frontier-x-200 h-1.5 w-full'></div>
        {/* Hero section */}
        <Hero />

        {/* Accordions Section */}
        <div className='grid grid-cols-2 gap-2 mx-auto max-w-7xl my-20 h-auto'>
          <div className='h-50'>
            <Accordion title="Lorem Ipsum">
              <div className=' w-full max-w-md'>
                <p className='text-sm font-extralight text-left'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo vel deleniti accusantium autem. Voluptatibus dolor corporis officiis obcaecati sit molestiae a ad nostrum, cum porro facilis quasi cupiditate placeat quo!
                </p>
              </div>
              <div className='flex gap-10 mt-10 w-full'>
                <ul>
                  <li className=' mb-5 flex items-center gap-2'><FiExternalLink size={24} />
                    <Link href="!#">
                      <a className='text-red-500'>Lorem Ipsum</a>
                    </Link>
                  </li>
                  <li className='mb-5 flex items-center gap-2'><FiInstagram size={24} />
                    <Link href="!#">
                      <a className='text-red-500'>@Lorem Ipsum</a>
                    </Link>
                  </li>
                </ul>
                <ul>
                  <li className='flex items-center gap-2 mb-5'><SiDiscord size={24} />
                    <Link href="!#">
                      <a className='text-red-500'>@Lorem Ipsum</a>
                    </Link>
                  </li>
                  <li className='mb-5 flex items-center gap-2'><FiTwitter size={24} />
                    <Link href="!#">
                      <a className=''>@Lorem Ipsum</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </Accordion>
          </div>
          <div className=''>
            <Accordion title="Lorem Ipsum" icon={<RiQuestionLine size={15}/>}>

              <div className='w-full h-72 pb-3 flex flex-cols flex-1 flex-wrap gap-2 items-center justify-center overflow-y-scroll scrollbar box-border'>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
              </div>
            </Accordion>
            <Accordion title="Lorem Ipsum">
              <div className='w-full h-auto flex flex-cols flex-1 flex-wrap gap-2 items-center justify-center box-border'>
                <p className='text-sm font-extralight text-left'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor totam facere dicta dignissimos, necessitatibus placeat magni deleniti eaque magnam vel voluptates, soluta, numquam eveniet repellat omnis in! Vel, neque expedita!</p>
                </div>
            </Accordion>
          </div>
        </div>
      </main>
      <footer className='w-full h-40 flex items-center justify-center bg-black'>
        <div className='text-gray-900'>
          <Image
            src="/static/frontierx-logo-v2.svg"
            alt="Frontier X"
            width={200}
            height={24}
          />
        </div>
      </footer>
    </div>
  )
}
