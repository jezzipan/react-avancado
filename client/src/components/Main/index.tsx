import * as S from './styles'

<<<<<<< HEAD
const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components'
}) => (
=======
const Main = () => (
>>>>>>> f644edc2161f6ca87e5c9703ac23808f0f630989
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React Avançado escrito ao lado."
    />
<<<<<<< HEAD
    <S.Title>{title}</S.Title>

    <S.Description>{description}</S.Description>

    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código."
=======
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Uma pessoa desenvolvendo de frente para uma tela com código."
>>>>>>> f644edc2161f6ca87e5c9703ac23808f0f630989
    />
  </S.Wrapper>
)

export default Main
