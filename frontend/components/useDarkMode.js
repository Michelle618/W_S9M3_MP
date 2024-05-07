import { useLocalStorage } from '../components/hooks/useLocalStorage.js'

export function useDarkMode() {
    const [dark, setDark] = useLocalStorage('darkmode', false)
    return [dark, setDark]
}