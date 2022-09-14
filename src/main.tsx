import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'

import CalendarContextWrapper from '@/context/Calendar/CalendarContextWrapper';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <CalendarContextWrapper>
      <App />
    </CalendarContextWrapper>,
  </React.StrictMode>,
)
