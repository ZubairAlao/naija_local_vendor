import React from 'react'
import { Button } from './ui/button'
import LoaderImage from "@/assets/icons/loader.svg"

interface ButtonProps {
    isLoading: boolean,
    className?: string, 
    children: React.ReactNode,
    onClick?: () => void;
}

const SubmitButton = ({isLoading, className, children, onClick }: ButtonProps) => {
  return (
    <Button type='submit' variant="greenButton" disabled={isLoading} className={className ?? 'w-full'} onClick={onClick}>
        {isLoading ? (
            <div className="flex items-center gap-4">
                <img
                  src={LoaderImage}
                  alt="loader"
                  width={24}
                  height={24}
                  className="animate-spin"
                />
                Loading...
            </div>
        ): children}
    </Button>
  )
}

export default SubmitButton