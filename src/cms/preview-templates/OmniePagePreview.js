import React from 'react'
import PropTypes from 'prop-types'
import { OmniePageTemplate } from '../../templates/strona-o-mnie'

const OmniePagePreview = ({ entry, widgetFor }) => (
  <OmniePageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

OmniePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default OmniePagePreview
