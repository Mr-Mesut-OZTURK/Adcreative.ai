import { IChildrenProps } from '@/types'


export const MainLayout = ({ children }: IChildrenProps) => {
    return (
        <div>
            Navbar
            {children}
            Footer
        </div>
    )
}
