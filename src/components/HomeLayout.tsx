import { Outlet } from "react-router-dom"
import Header from "./Header"

const HomeLayout = () => {
    return (
        <>
            <Header />
            <main>
                <div className="py-4 bg-base-100">
                    <Outlet />
                </div>
            </main>
        </>
    )
}
export default HomeLayout;
