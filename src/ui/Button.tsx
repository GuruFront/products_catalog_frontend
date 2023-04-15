import React, {ReactNode} from "react";

type Props = {
    children: ReactNode,
    onClick: () => void
}

const Button = (props: Props) => {
    const {onClick, children} = props;

    return <button
        onClick={onClick}
        className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l
            hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400
            dark:hover:bg-gray-700 dark:hover:text-white">
        {children}
    </button>
}

export default Button