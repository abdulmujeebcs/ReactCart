import { useEffect, useRef } from 'react';

interface ThemeSwitcherProps {
    onClose: () => void;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ onClose }) => {
    const modalRef = useRef<HTMLDialogElement | null>(null);

    const closeModal = () => {
        if (modalRef.current) {
            modalRef.current.close();
        }
    };

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.showModal();
        }
    }, []);

    useEffect(() => {
        if (modalRef.current) {
            modalRef.current.addEventListener('close', onClose);
        }
        return () => {
            if (modalRef.current) {
                modalRef.current.removeEventListener('close', onClose);
            }
        };
    }, [onClose]);

    return (
        <>
            {/* Modal */}
            <dialog ref={modalRef} className="modal">
                <div className="modal-box relative p-6 bg-white rounded-lg shadow-lg max-w-md w-full">
                    <form method="dialog">
                        {/* Button to Close Modal */}
                        <button
                            type="button"
                            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                            onClick={closeModal}
                        >
                            ✕
                        </button>
                        <div className="flex flex-col items-center p-6 max-w-sm mx-auto">
                            <label htmlFor="theme" className="text-lg font-semibold mb-2">
                                Select Theme
                            </label>
                            <select
                                id="theme"
                                className="select select-bordered w-full max-w-xs text-base bg-base-200 border border-base-300 focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"
                            >
                                <option value="theme">Theme 1</option>
                                <option value="eidTheme">Theme 2</option>
                            </select>
                        </div>

                        <div className="flex justify-center mt-6 ">
                            <button className="btn btn-primary">
                                Update Theme
                            </button>
                        </div>
                    </form>
                </div>
            </dialog>
        </>
    );
};

export default ThemeSwitcher;
