import * as React from "react";
import {memo} from "react";
import cls from './Button.module.scss'

interface ButtonProps {
    onClick: () => void
    className?: string
    children: React.ReactNode
}
export const Button = memo((props: ButtonProps) => {

    const {
        onClick,
        children
    } = props

    return (
        <button
            className={cls.mainButton}
            onClick={onClick}
        >
            {children}
        </button>
    );
});
