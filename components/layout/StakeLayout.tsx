import React, { ReactNode } from 'react'
import { StakeHeader } from 'components/stake/StakeHeader'

export const StakeLayout: React.FC<{
    children?: ReactNode
}> = ({ children }) => {
    return (
        <div className='flex items-center justify-center'>
            <div className="flex flex-col items-center w-[580px]">
                <StakeHeader />
                {children}
            </div>
        </div>
    )
}