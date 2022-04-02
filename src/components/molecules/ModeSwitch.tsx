import React, { FunctionComponent, useState, useEffect } from 'react'
import styled from '@emotion/styled'
import Icon, { IconComponent } from '../atom/Icon'

const MODE_STORAGE_KEY = 'blog-current-mode'

export const Switch = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  font-size: 15px;
  cursor: pointer;
  padding: 2px 5px;
  border-radius: 3px;
  background: var(--color);
  color: var(--background);

  ${IconComponent} {
    margin-right: 3px;
    padding-bottom: 0.5px;
  }

  @media (max-width: 768px) {
    font-size: 13px;

    ${IconComponent} {
      padding-bottom: 0;
    }
  }
`

const ModeSwitch: FunctionComponent = function () {
  const [currentMode, setCurrentMode] = useState<string | null>()

  useEffect(() => {
    setCurrentMode(window.localStorage.getItem(MODE_STORAGE_KEY))
  }, [])

  const changeMode = () => {
    const toggledMode = currentMode === 'light' ? 'dark' : 'light'

    if (!currentMode) return

    window.document.body.classList.remove(currentMode)
    window.document.body.classList.add(toggledMode)

    window.localStorage.setItem(MODE_STORAGE_KEY, toggledMode)
    setCurrentMode(toggledMode)
  }

  return (
    <>
      <Switch onClick={changeMode}>
        <Icon type={currentMode === 'light' ? 'moon' : 'sun'} size={11} />{' '}
        {currentMode === 'light' ? 'Dark' : 'Light'}
      </Switch>
    </>
  )
}

export default ModeSwitch
