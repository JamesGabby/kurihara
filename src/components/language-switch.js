import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'
import { withNamespaces } from 'react-i18next'
import { map, find } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons/faLanguage'
import { faHourglass } from '@fortawesome/free-solid-svg-icons/faHourglass'
import { Popover, Position } from '@blueprintjs/core'

import { rhythm } from '../utils/typography'

const LANGUAGES = [
  {
    display: '简体中文',
    value: 'zh-CN',
  },
  {
    display: '日本語',
    value: 'ja',
  },
  {
    display: 'English',
    value: 'en',
  },
  {
    display: 'Français',
    value: 'fr',
  },
]

const Switches = styled.div`
  display: flex;
`

const Switch = styled.div`
  padding: ${rhythm(0.25)};
  margin: ${rhythm(0.25)};
  cursor: pointer;

  color: ${props => props.active && props.theme.blue};
  background-color: ${props => props.active && rgba(props.theme.blue, 0.1)};
`

const LangugeIndicator = styled(Popover)`
  cursor: pointer;
`

const LanguageSwitch = withNamespaces([], { wait: false })(
  class LanguageSwitch extends Component {
    static propTypes = {
      i18n: PropTypes.shape({
        changeLanguage: PropTypes.func,
        language: PropTypes.string,
      }).isRequired,
      tReady: PropTypes.bool.isRequired,
    }

    render() {
      const { i18n, tReady } = this.props
      const currentLanguage = find(LANGUAGES, ({ value }) =>
        i18n.language?.startsWith(value),
      )?.display
      return (
        <LangugeIndicator
          interactionKind="hover"
          position={Position.TOP_LEFT}
          wrapperTagName="div"
        >
          <div>
            <FontAwesomeIcon icon={tReady ? faLanguage : faHourglass} />{' '}
            {currentLanguage}
          </div>
          <Switches>
            {map(LANGUAGES, ({ display, value }) => (
              <Switch
                active={i18n.language === value}
                key={value}
                onClick={() => i18n.changeLanguage(value)}
              >
                {display}
              </Switch>
            ))}
          </Switches>
        </LangugeIndicator>
      )
    }
  },
)

export default LanguageSwitch
