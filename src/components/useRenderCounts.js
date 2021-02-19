import { useRef } from 'react'

export const useRenderCounts = (componentName) => {
    const renders = useRef(0)
    console.log(`renders ${componentName}: `,renders.current++);
}
