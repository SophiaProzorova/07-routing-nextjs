'use client'

import { useRouter } from "next/navigation";
import ModalBasic from "@/components/Modal/Modal";

const Modal = (props) => {
    const router = useRouter();

    return <ModalBasic onClose={() => router.back()} {...props}/>;
};

export default Modal;