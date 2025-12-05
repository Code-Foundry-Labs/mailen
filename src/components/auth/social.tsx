import { FaGoogle, FaXTwitter, FaWindows, FaGithub } from "react-icons/fa6";

import { Button } from '../ui/button'

const Social = ({ disabled = false }: { disabled?: boolean }) => {
    return (
        <div className=' grid grid-cols-4 w-full gap-2 mb-2'>
            <Button variant="social" disabled={disabled}>
                <FaGoogle />
            </Button>
            <Button variant="social" disabled={disabled}>
                <FaXTwitter />
            </Button>
            <Button variant="social" disabled={disabled}>
                <FaWindows />
            </Button>
            <Button variant="social" disabled={disabled}>
                <FaGithub />
            </Button>
        </div>
    )w
}

export default Social