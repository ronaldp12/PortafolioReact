import cssIcon from '../../../assets/icons/css-icon.png'

export const CssIcon = ({estilos}) => {
  return (
    <div>
      <img className={estilos} src={cssIcon} alt="css-icon" />
    </div>
  )
}
