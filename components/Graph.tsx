import { useEffect, useState } from 'react'
import { animated, useSpring } from 'react-spring'
import styled from 'styled-components'
import { devices } from '../utils/devices'
// import bezier from 'bezier-curve'

const Label = styled.text`
  fill: #fff;
  text-shadow: 0 0 1px #000;
  font-family: 'Helvetica Neue';
  font-weight: 300;
  font-size: 20px;

  @media only screen and (${devices.tablet}) {
    font-size: 14px;
  }
`

// const bezierCurve = (normalizedData: [number, number]) => {
//   const curve = []
//   for (let t = 0; t < 1; t += 0.01) {
//     const point = bezier(t, normalizedData)
//     curve.push(point)
//   }
//   return curve
// }

type Data = {
  pledgesPath?: string
  parisPath?: string
  historyPath?: string
}

type Props = {
  history?: string
  pledges?: string
  paris?: string
  klimatData: Array<Data>
  currentStep: number
  width: number
  height: number
  maxCo2: number
}

const YEARS = [1990, 2000, 2010, 2020, 2025]

const Graph = ({ klimatData, currentStep, width, height, maxCo2 }: Props) => {
  const [loaded, setLoaded] = useState(false)
  const [minYear, setMinYear] = useState(1990)
  const [maxYear, setMaxYear] = useState(2030)
  const [labelSteps, setLabelSteps] = useState<number[]>([])

  const historyProps = useSpring({
    d: klimatData[currentStep].historyPath,
    config: {
      duration: 100,
    },
  })

  const parisProps = useSpring({
    d: klimatData[currentStep].parisPath,
    config: {
      duration: 100,
    },
  })
  const pledgesProps = useSpring({
    d: klimatData[currentStep].pledgesPath,
    config: {
      duration: 100,
    },
  })

  useEffect(() => {
    setTimeout(() => setLoaded(true), 300)

    const xCoords = YEARS.map((year) => {
      return ((year - minYear) / (maxYear - minYear)) * width
    })
    setLabelSteps(xCoords)
  }, [minYear, maxYear])

  const YearLabel = ({
    width = 500,
    height = 240,
    year,
    offset = 0,
    x,
  }: {
    width?: number
    height?: number
    offset?: number
    year: number
    x: number
  }) => {
    const y = height + 30 - offset
    return (
      <Label y={y} x={x}>
        {year}
      </Label>
    )
  }

  useEffect(() => {
    switch (currentStep) {
      case 0:
        setMinYear(1990)
        setMaxYear(2020)
        break
      case 1:
        setMinYear(1990)
        setMaxYear(2030)
        break
      case 2:
        setMinYear(1990)
        setMaxYear(2030)
        break
      case 3:
        setMinYear(2018)
        break
      default:
        break
    }
  }, [currentStep])

  return (
    <>
      <div className={loaded ? 'loaded' : ''}>
        <svg viewBox={`0 -10 ${width} ${height + 30}`}>
          <defs>
            <filter id="dropshadow">
              <feGaussianBlur in="SourceAlpha" stdDeviation="3"></feGaussianBlur>
              <feOffset dx="0" dy="0" result="offsetblur"></feOffset>
              <feComponentTransfer>
                <feFuncA slope="0.2" type="linear"></feFuncA>
              </feComponentTransfer>
              <feMerge>
                <feMergeNode></feMergeNode>
                <feMergeNode in="SourceGraphic"></feMergeNode>
              </feMerge>
            </filter>
          </defs>
          <g className="datasets">
            <animated.path
              className="dataset show"
              d={historyProps.d}
              id="dataset-1"></animated.path>
            <animated.path
              className="dataset show"
              d={pledgesProps.d}
              id="dataset-2"></animated.path>
            <animated.path
              className="dataset show"
              d={parisProps.d}
              id="dataset-3"></animated.path>
          </g>
          <Label x="0" y="15">
            {Math.ceil(maxCo2 / 1000) * 1000} co2
          </Label>
          <YearLabel key="1" year={1990} x={labelSteps[0]} />
          <YearLabel key="2" year={2000} x={labelSteps[1]} />
          <YearLabel key="3" year={2010} x={labelSteps[2]} />
          <YearLabel key="4" year={2020} x={labelSteps[3]} />
          <YearLabel key="5" year={2025} x={labelSteps[4]} />
        </svg>
      </div>
    </>
  )
}

export default Graph