import WhiteBluetooth from '@/assets/headphones/headphones_b_2.webp'
import { Button } from './ui/button'

const LandingpageBanner = () => {
  return (
    <div className="bg-primary my-16 text-white">
      <div className="max-w-[80%] mx-auto flex justify-between gap-2 items-center max-md:py-4">
          <div className='space-y-4 flex-1'>
              <p className='~text-xl/5xl'>Grab Upto 50% off of the selected Items</p>
              <Button children="Buy" variant={"secondary"} size={'lg'} className='' />
          </div>
          <div className="~max-w-[10rem]/[20rem] shrink">
              <img src={WhiteBluetooth} alt="white bluetooth" loading='lazy' className='w-full h-full' />
          </div>
      </div>
    </div>
  )
}

export default LandingpageBanner