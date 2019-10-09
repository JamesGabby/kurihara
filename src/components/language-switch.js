import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { rgba } from 'polished'
import { withTranslation } from 'react-i18next'
import { map, memoize } from 'lodash'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage } from '@fortawesome/free-solid-svg-icons/faLanguage'

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
  align-items: center;
`

const Switch = styled.div`
  padding: ${rhythm(0.25)};
  margin: ${rhythm(0.25)};
  cursor: pointer;

  color: ${props => props.active && props.theme.blue};
  background-color: ${props => props.active && rgba(props.theme.blue, 0.1)};
`

const LangugeIndicator = styled.div`
  cursor: pointer;
`

const LanguageSwitch = withTranslation(['ui'], {
  wait: false,
})(
  class LanguageSwitch extends Component {
    handleChangeLanguage = memoize(lng => () => {
      const { i18n } = this.props
      i18n.changeLanguage(lng)
    })

    static propTypes = {
      i18n: PropTypes.shape({
        changeLanguage: PropTypes.func,
        language: PropTypes.string,
      }).isRequired,
    }

    render() {
      const { i18n } = this.props
      return (
        <LangugeIndicator className="language-switch">
          <Switches>
            <FontAwesomeIcon icon={faLanguage} />
            {map(LANGUAGES, ({ display, value }) => (
              <Switch
                active={i18n.language === value}
                key={value}
                className="language-switch-item"
                data-testid={value}
                onClick={this.handleChangeLanguage(value)}
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
