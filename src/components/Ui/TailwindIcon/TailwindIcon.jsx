import tailwindIcon from '../../../assets/icons/tailwind-icon.png'

export const TailwindIcon = ({estilos}) => {
  return (
    <div>
      <img className={estilos} src={tailwindIcon} alt="tailwind icon" />
    </div>
  )
}
