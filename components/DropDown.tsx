import { useState, useRef, useEffect } from 'react'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import ArrowDown from '../public/icons/arrow-down.svg'
import Button from './Button'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  width: 280px;
`

const SearchDropDown = styled.div`
  position: relative;
  display: inline-block;
`

const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-contet: center;
`

const Input = styled.input`
  width: 280px;
  height: 56px;
  background-color: ${({ theme }) => theme.black};
  border: 1px solid white;
  border-radius: 4px;
  color: ${({ theme }) => theme.white};
  padding-left: 1rem;
  outline: none;
  font-size: 16px;
  font-weight: 300;
  font-family: Helvetica Neue;

  ::placeholder {
    color: ${({ theme }) => theme.white};
  }
`

const Btn = styled.button`
  background-color: ${({ theme }) => theme.black};
  width: 40px;
  height: 30px;
  right: 10px;
  position: absolute;
  border: none;
`

const MunicipalitiesWrapper = styled.ul`
  background-color: #f9fbff;
  border-radius: 4px;
  max-height: 195px;
  overflow-y: scroll;
  position: absolute;
`

const Municiplity = styled.li`
  color: ${({ theme }) => theme.black};
  text-decoration: none;
  width: 280px;
  height: 56px;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  position: relative;
`

type Props = {
  municipalitiesName: Array<string>
}
const DropDown = ({ municipalitiesName }: Props) => {
  const sortedMunicipalities = municipalitiesName.sort((a, b) => a.localeCompare(b))
  const [showDropDown, setShowDropDown] = useState(false)
  const [selectedMuniciplity, setSelectedMunicipality] = useState<string>('')
  const [municipalities, setMunicipalities] = useState(sortedMunicipalities)
  const [showInfoText, setShowInfoText] = useState(false)

  const ref = useRef<HTMLDivElement>(null)
  const router = useRouter()

  useEffect(() => {
    const checkIfClickedOutside = (e: { target: any }) => {
      if (showDropDown && ref.current && !ref.current.contains(e.target)) {
        setShowDropDown(false)
      }
    }
    document.addEventListener('mousedown', checkIfClickedOutside)
    return () => {
      document.removeEventListener('mousedown', checkIfClickedOutside)
    }
  }, [showDropDown])

  const onMuniciplityClick = (e: any) => {
    setSelectedMunicipality(e.target.innerHTML)
    setShowDropDown(false)
  }

  const onInputChange = (value: string) => {
    setSelectedMunicipality(value)
    if (value.length < 1) {
      setShowDropDown(false)
    } else {
      setShowDropDown(true)
    }
    const filterdMunicipalities = sortedMunicipalities.filter((test) =>
      test.toLowerCase().startsWith(value.toLowerCase()),
    )
    setMunicipalities(filterdMunicipalities)
  }

  const seeMuniciplity = () => {
    if (municipalities.includes(selectedMuniciplity)) {
      router.push(`kommun/${selectedMuniciplity.toLowerCase()}`)
    } else {
      setShowInfoText(true)
      setTimeout(() => {
        setShowInfoText(false)
      }, 2000)
    }
  }

  return (
    <Container>
      {showInfoText && <p>Välj en kommun i listan</p>}
      <SearchDropDown ref={ref}>
        <Flex>
          <Input
            type="text"
            placeholder="Hur går det för din kommun?"
            onChange={(e) => onInputChange(e.target.value)}
            value={selectedMuniciplity}
          />
          <Btn onClick={() => setShowDropDown((current) => !current)}>
            <ArrowDown />
          </Btn>
        </Flex>
        {showDropDown && (
          <MunicipalitiesWrapper>
            {municipalities.map((name, i) => (
              <Municiplity key={i} onClick={(e) => onMuniciplityClick(e)}>
                {name}
              </Municiplity>
            ))}
          </MunicipalitiesWrapper>
        )}
      </SearchDropDown>
      <Button handleClick={seeMuniciplity} text="Granska nu" />
    </Container>
  )
}

export default DropDown