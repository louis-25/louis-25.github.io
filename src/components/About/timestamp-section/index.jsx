import React from 'react'
import SectionHeader from '../section-header'
import IconButtonBar from 'components/Common/icon-button-bar'
import timestamps from './data.js'
import './style.scss'

function TimeStampSection() {
  // if (!timestamps || timestamps.length < 2) return null
  console.log('test', timestamps)
  return (
    <div className="timestamp-section">
      <SectionHeader title="Timestamps" />
      <div className="body">
        {timestamps.map((timestamp, index) => (
          <div className="timestamp" key={index}>
            <div className="date">{timestamp.date}</div>
            <div className="activity">
              {timestamp.activity}&nbsp;
              {timestamp.links && <IconButtonBar links={timestamp.links} />}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TimeStampSection
