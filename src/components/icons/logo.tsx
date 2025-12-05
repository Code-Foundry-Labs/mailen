"use client"

import { useTheme } from "next-themes"

const Logo = () => {
    const { resolvedTheme } = useTheme()
    const isDark = resolvedTheme === "dark"

    if (isDark) {
        // Dark mode version - white/light colors on semi-transparent black background
        return (
            <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none">
                <g filter="url(#filter0_ddiii_30_1506)">
                    <g clipPath="url(#clip0_30_1506)">
                        <rect x="3" width="60" height="60" rx="16" fill="black" fillOpacity="0.5" shapeRendering="crispEdges" />
                        <rect width="60" height="60" transform="translate(3)" fill="url(#paint0_linear_30_1506)" />
                        <g filter="url(#filter1_d_30_1506)">
                            <path d="M23.4162 23.7507H17.3339C15.8611 23.7507 14.6667 24.9446 14.6667 26.4173V28.7507H23.8334C26.1346 28.7507 28.0001 26.8852 28.0001 24.584C28.0001 22.2828 29.8656 20.4173 32.1667 20.4173H48.0001C49.841 20.4173 51.3334 18.9249 51.3334 17.084V14.584H32.5834C30.0521 14.584 28.0001 16.636 28.0001 19.1673C28.0001 21.6986 25.9475 23.7507 23.4162 23.7507Z" fill="url(#paint1_linear_30_1506)" />
                            <path opacity="0.7" d="M23.4162 32.0827H17.3339C15.8611 32.0827 14.6667 33.2766 14.6667 34.7493V37.0827H23.8334C26.1346 37.0827 28.0001 35.2172 28.0001 32.916C28.0001 30.6148 29.8656 28.7493 32.1667 28.7493H43.0001C44.841 28.7493 46.3334 27.257 46.3334 25.416V22.916H32.5834C30.0521 22.916 28.0001 24.968 28.0001 27.4993C28.0001 30.0307 25.9475 32.0827 23.4162 32.0827Z" fill="url(#paint2_linear_30_1506)" />
                            <path opacity="0.5" d="M23.4162 40.4167H17.3339C15.8611 40.4167 14.6667 41.6106 14.6667 43.0833V45.4167H23.8334C26.1346 45.4167 28.0001 43.5512 28.0001 41.25C28.0001 38.9488 29.8656 37.0833 32.1667 37.0833H38.6667C40.1395 37.0833 41.3334 35.8894 41.3334 34.4167V31.25H32.5834C30.0521 31.25 28.0001 33.302 28.0001 35.8333C28.0001 38.3646 25.9475 40.4167 23.4162 40.4167Z" fill="url(#paint3_linear_30_1506)" />
                        </g>
                    </g>
                    <rect x="4" y="1" width="58" height="58" rx="15" stroke="url(#paint4_linear_30_1506)" strokeWidth="2" shapeRendering="crispEdges" />
                </g>
                <defs>
                    <filter id="filter0_ddiii_30_1506" x="0" y="-3" width="66" height="69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="1" />
                        <feGaussianBlur stdDeviation="0.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.08 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_30_1506" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_30_1506" />
                        <feOffset dy="3" />
                        <feGaussianBlur stdDeviation="2" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.05 0" />
                        <feBlend mode="normal" in2="effect1_dropShadow_30_1506" result="effect2_dropShadow_30_1506" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_30_1506" result="shape" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="-3" />
                        <feGaussianBlur stdDeviation="1.5" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                        <feBlend mode="normal" in2="shape" result="effect3_innerShadow_30_1506" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feOffset dy="3" />
                        <feGaussianBlur stdDeviation="1.5" />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                        <feBlend mode="normal" in2="effect3_innerShadow_30_1506" result="effect4_innerShadow_30_1506" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect5_innerShadow_30_1506" />
                        <feOffset />
                        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.2 0" />
                        <feBlend mode="normal" in2="effect4_innerShadow_30_1506" result="effect5_innerShadow_30_1506" />
                    </filter>
                    <filter id="filter1_d_30_1506" x="11.6667" y="9.25" width="42.6667" height="46" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                        <feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_30_1506" />
                        <feOffset dy="2.25" />
                        <feGaussianBlur stdDeviation="2.25" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0" />
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_30_1506" />
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_30_1506" result="shape" />
                    </filter>
                    <linearGradient id="paint0_linear_30_1506" x1="30" y1="7.45058e-07" x2="32.5" y2="60" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0" />
                        <stop offset="1" stopColor="white" stopOpacity="0.12" />
                    </linearGradient>
                    <linearGradient id="paint1_linear_30_1506" x1="33.0001" y1="14.584" x2="33.0001" y2="28.7507" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.8" />
                        <stop offset="1" stopColor="white" stopOpacity="0.5" />
                    </linearGradient>
                    <linearGradient id="paint2_linear_30_1506" x1="30.5001" y1="22.916" x2="30.5001" y2="37.0827" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.8" />
                        <stop offset="1" stopColor="white" stopOpacity="0.5" />
                    </linearGradient>
                    <linearGradient id="paint3_linear_30_1506" x1="28.0001" y1="31.25" x2="28.0001" y2="45.4167" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.8" />
                        <stop offset="1" stopColor="white" stopOpacity="0.5" />
                    </linearGradient>
                    <linearGradient id="paint4_linear_30_1506" x1="33" y1="0" x2="33" y2="60" gradientUnits="userSpaceOnUse">
                        <stop stopColor="white" stopOpacity="0.12" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                    </linearGradient>
                    <clipPath id="clip0_30_1506">
                        <rect x="3" width="60" height="60" rx="16" fill="white" />
                    </clipPath>
                </defs>
            </svg>
        )
    }

    // Light mode version - original dark colors
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="66" viewBox="0 0 66 66" fill="none">
            <g filter="url(#filter0_ddiii_22_1375)">
                <g clipPath="url(#clip0_22_1375)">
                    <rect x="3" width="60" height="60" rx="16" fill="#0A0D12" />
                    <rect width="60" height="60" transform="translate(3)" fill="url(#paint0_linear_22_1375)" />
                    <g filter="url(#filter1_d_22_1375)">
                        <path d="M23.4161 23.7502H17.3338C15.8611 23.7502 14.6667 24.9441 14.6667 26.4168V28.7502H23.8334C26.1345 28.7502 28 26.8847 28 24.5835C28 22.2823 29.8655 20.4168 32.1667 20.4168H48C49.841 20.4168 51.3334 18.9244 51.3334 17.0835V14.5835H32.5834C30.052 14.5835 28 16.6355 28 19.1668C28 21.6981 25.9474 23.7502 23.4161 23.7502Z" fill="url(#paint1_linear_22_1375)" />
                        <path opacity="0.7" d="M23.4161 32.0832H17.3338C15.8611 32.0832 14.6667 33.2771 14.6667 34.7498V37.0832H23.8334C26.1345 37.0832 28 35.2177 28 32.9165C28 30.6153 29.8655 28.7498 32.1667 28.7498H43C44.841 28.7498 46.3334 27.2575 46.3334 25.4165V22.9165H32.5834C30.052 22.9165 28 24.9685 28 27.4998C28 30.0311 25.9474 32.0832 23.4161 32.0832Z" fill="url(#paint2_linear_22_1375)" />
                        <path opacity="0.5" d="M23.4161 40.4167H17.3338C15.8611 40.4167 14.6667 41.6106 14.6667 43.0833V45.4167H23.8334C26.1345 45.4167 28 43.5512 28 41.25C28 38.9488 29.8655 37.0833 32.1667 37.0833H38.6667C40.1394 37.0833 41.3334 35.8894 41.3334 34.4167V31.25H32.5834C30.052 31.25 28 33.302 28 35.8333C28 38.3646 25.9474 40.4167 23.4161 40.4167Z" fill="url(#paint3_linear_22_1375)" />
                    </g>
                </g>
                <rect x="4" y="1" width="58" height="58" rx="15" stroke="url(#paint4_linear_22_1375)" strokeWidth="2" />
            </g>
            <defs>
                <filter id="filter0_ddiii_22_1375" x="0" y="-3" width="66" height="69" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="1" />
                    <feGaussianBlur stdDeviation="0.5" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0 0.162923 0 0 0 0.08 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_1375" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect2_dropShadow_22_1375" />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0 0.164706 0 0 0 0.14 0" />
                    <feBlend mode="normal" in2="effect1_dropShadow_22_1375" result="effect2_dropShadow_22_1375" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_22_1375" result="shape" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="-3" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="shape" result="effect3_innerShadow_22_1375" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="3" />
                    <feGaussianBlur stdDeviation="1.5" />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="effect3_innerShadow_22_1375" result="effect4_innerShadow_22_1375" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="1" operator="erode" in="SourceAlpha" result="effect5_innerShadow_22_1375" />
                    <feOffset />
                    <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
                    <feBlend mode="normal" in2="effect4_innerShadow_22_1375" result="effect5_innerShadow_22_1375" />
                </filter>
                <filter id="filter1_d_22_1375" x="11.6667" y="9.25" width="42.6667" height="46" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feMorphology radius="1.5" operator="erode" in="SourceAlpha" result="effect1_dropShadow_22_1375" />
                    <feOffset dy="2.25" />
                    <feGaussianBlur stdDeviation="2.25" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0.1 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_22_1375" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_22_1375" result="shape" />
                </filter>
                <linearGradient id="paint0_linear_22_1375" x1="30" y1="7.45058e-07" x2="32.5" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0" />
                    <stop offset="1" stopColor="white" stopOpacity="0.12" />
                </linearGradient>
                <linearGradient id="paint1_linear_22_1375" x1="33" y1="14.5835" x2="33" y2="28.7502" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.8" />
                    <stop offset="1" stopColor="white" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="paint2_linear_22_1375" x1="30.5" y1="22.9165" x2="30.5" y2="37.0832" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.8" />
                    <stop offset="1" stopColor="white" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="paint3_linear_22_1375" x1="28" y1="31.25" x2="28" y2="45.4167" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.8" />
                    <stop offset="1" stopColor="white" stopOpacity="0.5" />
                </linearGradient>
                <linearGradient id="paint4_linear_22_1375" x1="33" y1="0" x2="33" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stopColor="white" stopOpacity="0.12" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                </linearGradient>
                <clipPath id="clip0_22_1375">
                    <rect x="3" width="60" height="60" rx="16" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
}

export default Logo