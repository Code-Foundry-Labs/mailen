import { FaGoogle, FaXTwitter, FaWindows, FaGithub } from "react-icons/fa6";

import { Button } from '../ui/button'

const Social = () => {
    return (
        <div className=' grid grid-cols-4 w-full gap-2 mb-2'>
            <Button variant="social">
                <FaGoogle />
            </Button>
            <Button variant="social">
                <FaXTwitter />
            </Button>
            <Button variant="social">
                <FaWindows />
            </Button>
            <Button variant="social">
                <FaGithub />
            </Button>
        </div>
    )
}

export default Social