import WhiteBluetooth from '@/assets/headphones/headphones_b_2.webp'
import { Button } from './ui/button'

const LandingpageBanner = () => {
  return (
    <div className="bg-primary my-6 px-16 flex justify-between items-center text-white">
        <div className='space-y-4'>
            <p className='h2 max-w-[60%]'>Grab Upto 50% off of the selected Items</p>
            <Button children="Buy" className='bg-secondary text-textPrimary rounded-2xl py-4 px-10 text-lg' />
        </div>
        <div className="max-w-[20rem] -ml-24">
            <img src={WhiteBluetooth} alt="white bluetooth" loading='lazy' className='w-full h-full' />
        </div>
    </div>
  )
}

export default LandingpageBanner