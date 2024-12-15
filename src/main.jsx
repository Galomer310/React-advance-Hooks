import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import AppThemeMode from './AppThemeMode.jsx'
import CharacterCounter from './CharacterCounter.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppThemeMode/>
    <CharacterCounter/>
  </StrictMode>,
)
