import { Outlet } from "react-router-dom"
import Header from "./Header"
import { useState } from "react";
import ThemeSwitcher from "./Modals/ThemeSwitcher";

const HomeLayout = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        setModalVisible(false);
    };

    return (
        <>
            <Header />
            <main>
                <div className="py-4 bg-base-300">
                    <Outlet />
                </div>
            </main>
            <button
                className="fixed bottom-4 right-4 bg-primary text-white p-3 rounded-full shadow-lg hover:text-primary hover:bg-base-200 transition"
                onClick={openModal}
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12h3m-3 0v3m0-3V9m0 3H9m3 0V6m0 3h3m-3 0v3m0 0v3m0-6h3m0-3v3m0 0h3m-3 0V9m0 0H9m0 0h3m3 0v3m-3 0h3m0 0v3m-3 0H6m0-3v3m3-3v-3m0 3h3" />
                </svg>
            </button>

            {isModalVisible && <ThemeSwitcher onClose={closeModal} />}
        </>
    )
}
export default HomeLayout;
