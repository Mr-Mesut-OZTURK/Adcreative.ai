import { MainNavbar } from '@/components'
import { IChildrenProps } from '@/types'


export const MainLayout = ({ children }: IChildrenProps) => {
    return (
        <div>
            <MainNavbar />
            <div className='p-2 sm:p-5'>
                {children}
            </div>
        </div>
    )
}
